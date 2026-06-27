# PROMPT — POC Calculadora Jurídico-Tributária (Next.js + Vercel)

> Cole este prompt inteiro num agente de código (v0, Cursor, Claude Code, etc.).
> Ele é a especificação completa de uma POC mínima e funcional para validar a ideia.
> Idioma da UI: **português (Brasil)**. Nomes de código: inglês.

---

## 0. Papel e objetivo

Você é um engenheiro full-stack sênior. Construa uma **POC (prova de conceito)** de uma calculadora jurídico-tributária **B2C** (o usuário final é o dono da empresa). O objetivo é **validar o funil**: visitante informa CNPJ + poucos dados → recebe uma **faixa estimada** de créditos tributários recuperáveis → deixa contato (lead) → o lead é gravado para o escritório de advocacia trabalhar.

**Não é** um sistema de cálculo fiscal exato. É um **estimador de potencial** que gera lead qualificado. Faça o **mínimo necessário para validar**, com código limpo e pronto para evoluir.

---

## 1. Stack e restrições

- **Next.js 14+ (App Router)** + **TypeScript** + **Tailwind CSS**.
- Deploy alvo: **Vercel**. Tudo no mesmo projeto — **sem backend Python**. A lógica roda em **Route Handlers** (`app/api/.../route.ts`) e Server Actions.
- Persistência de leads: **Vercel Postgres / Neon** (uma tabela `leads`) via `@vercel/postgres` ou `postgres`. Se quiser ainda mais simples para rodar local, suporte um **fallback** que grava em `./data/leads.json`. Variável `DATABASE_URL` opcional.
- Sem autenticação, sem pagamento, sem upload de arquivos fiscais. Sem dependências pesadas.
- O **motor de cálculo roda no servidor** (route handler), não no cliente — a lógica das teses é o ativo.

---

## 2. A jornada (máquina de estados, página única `/`)

Implemente como **um Client Component** com `step` controlado por estado. Capture UTMs da URL na entrada e carregue-as até o lead.

1. **`landing`** — headline informativa + 1 campo: **CNPJ** (com máscara `00.000.000/0000-00`). Botão "Analisar".
2. **`enriching`** — loading enquanto chama `/api/cnpj/[cnpj]`.
3. **`inputs`** — mostra o "espelho" (Razão Social, setor/CNAE, regime detectado, porte, UF) + formulário estreito (ver §4). Botão "Calcular potencial".
4. **`result_locked`** — mostra a **faixa total borrada/parcial** e o detalhamento por tese **bloqueado** (blur + cadeado). CTA "Ver detalhamento completo".
5. **`gate`** — formulário: **nome, e-mail, telefone/WhatsApp** + **checkbox de consentimento LGPD** (obrigatório). Ao enviar → `POST /api/lead`.
6. **`result_full`** — detalhamento por tese, nível de confiança, aviso de prazo (reforma/prescrição), **disclaimer OAB**, e CTA "Falar com especialista".

Estados de erro/loading em cada passo. CNPJ inválido → mensagem clara. API de CNPJ fora → permitir preenchimento manual do setor/regime e seguir.

---

## 3. Integração com a API de CNPJ

Crie `GET /api/cnpj/[cnpj]`:

- Limpe o CNPJ (só dígitos, valide 14 dígitos e dígito verificador).
- **Fonte primária:** BrasilAPI — `https://brasilapi.com.br/api/cnpj/v1/{cnpj}` (sem chave).
- **Fallback:** ReceitaWS — `https://receitaws.com.br/v1/cnpj/{cnpj}` (tem rate limit; normalize o shape diferente).
- Faça cache simples (in-memory por instância) e trate rate limit (HTTP 429) com mensagem amigável.

Campos da BrasilAPI a usar e normalizar:

```ts
type CnpjData = {
  cnpj: string;
  razaoSocial: string;        // razao_social
  nomeFantasia?: string;      // nome_fantasia
  cnaeCodigo: number;         // cnae_fiscal
  cnaeDescricao: string;      // cnae_fiscal_descricao
  cnaesSecundarios: number[]; // cnaes_secundarios[].codigo
  porte: string;              // porte
  situacao: string;           // descricao_situacao_cadastral (use só ATIVA)
  optanteSimples: boolean;    // opcao_pelo_simples (pode vir null)
  optanteMei: boolean;        // opcao_pelo_mei
  uf: string;
  municipio: string;
};
```

A partir do CNAE, **classifique o setor** e **pré-preencha** o split mercadoria/serviço (helper `classifySetor(cnae)`):

- Divisões 05–33 → **indústria** (ICMS) → sugerir `pctMercadoria=100`.
- Divisões 45–47 → **comércio** (ICMS) → sugerir `pctMercadoria=100`; checar monofásico.
- Demais (49–99, ex.: 62, 69, 71, 73, 85, 86) → **serviços** (ISS) → sugerir `pctServico=100`.

**Regime:** `optanteSimples === true` ⇒ `regime='simples'` (trava). Caso contrário, o regime real (Real vs Presumido) **não é confiável no dado público** → peça ao usuário confirmar (campo na §4), default `presumido`.

**Detecção de monofásico** (`isMonofasico(cnaePrincipal, cnaesSecundarios)`), por prefixo de CNAE — revenda de produtos com PIS/COFINS monofásico:

```
4731 (combustíveis varejo), 4681 (combustíveis atacado),
4771 / 4772 (farma / cosméticos varejo), 4646 (cosméticos atacado),
4723 (bebidas varejo), 4635 (bebidas atacado),
4530 (autopeças), 4511 (veículos)
```

---

## 4. Inputs estreitos (formulário do passo `inputs`)

Base (sempre): 
- `faturamentoMensal` (R$, slider + campo numérico com faixas; ex.: 0–5M).
- `numColaboradores` (inteiro).

Os **+2 que estreitam** (sempre): 
- `regime`: select `Lucro Real | Lucro Presumido` (escondido/travado se Simples). 
- `composição do faturamento`: dois campos `pctMercadoria` e `pctServico` (0–100, soma ≤ 100; pré-preenchidos pelo CNAE). O resto é "outros/isento".

Valide: pelo menos faturamento > 0; pctMercadoria + pctServico ≤ 100.

---

## 5. Motor de teses (servidor) — `POST /api/estimate`

Body = `{ cnpjData, faturamentoMensal, numColaboradores, regime, pctMercadoria, pctServico }`.
Retorna faixa total + por tese. **Toda alíquota é faixa (min/max) para produzir um intervalo — deixe tudo em um CONFIG editável.**

```ts
export const CONFIG = {
  LOOKBACK_MESES: 60,                                  // 5 anos
  PIS_COFINS: { real: 0.0925, presumido: 0.0365, simples: 0 },
  ICMS: { min: 0.12, max: 0.18 },                      // alíquota efetiva média (faixa)
  ISS:  { min: 0.02, max: 0.05 },
  MONOFASICO: { min: 0.04, max: 0.0925 },              // % do faturamento de revenda recuperável (heurística POC)
};
```

Cada tese retorna: `{ id, nome, status, elegivel, motivo, faixaMin, faixaMax }`.
`status ∈ { 'consolidada', 'em_discussao' }`.

**Tese 1 — Exclusão do ICMS da base do PIS/COFINS ("tese do século", Tema 69)** — `status: 'consolidada'`
- Elegível se `regime !== 'simples'` **e** `pctMercadoria > 0`.
- `base5 = faturamentoMensal * (pctMercadoria/100) * LOOKBACK_MESES`
- `aliqPC = PIS_COFINS[regime]`
- `faixaMin = base5 * ICMS.min * aliqPC`
- `faixaMax = base5 * ICMS.max * aliqPC`

**Tese 2 — Exclusão do ISS da base do PIS/COFINS (Tema 118)** — `status: 'em_discussao'`
- Elegível se `regime !== 'simples'` **e** `pctServico > 0`.
- `base5 = faturamentoMensal * (pctServico/100) * LOOKBACK_MESES`
- `faixaMin = base5 * ISS.min * aliqPC`
- `faixaMax = base5 * ISS.max * aliqPC`

**Tese 3 — Monofásico / revenda (setorial)** — `status: 'consolidada'`
- Elegível se `regime !== 'simples'` **e** `isMonofasico(...)`.
- Estimar a parcela do faturamento que é revenda monofásica. Para a POC, use `pctMercadoria` como proxy da base de revenda.
- `base5 = faturamentoMensal * (pctMercadoria/100) * LOOKBACK_MESES`
- `faixaMin = base5 * MONOFASICO.min`
- `faixaMax = base5 * MONOFASICO.max`

**Total:** soma de `faixaMin` e `faixaMax` das teses elegíveis.

**Caminho Simples Nacional:** se `regime === 'simples'`, **nenhuma** tese de PIS/COFINS é elegível. Não trave o funil: retorne `elegivel:false` com `motivo` explicativo e um flag `caminhoSimples:true`. Na UI, mostre mensagem honesta ("No Simples a recuperação de PIS/COFINS é limitada; há outras frentes — fale com um especialista") e **ainda assim capture o lead**.

---

## 6. Captura de lead — `POST /api/lead`

Grava na tabela `leads` (ou no JSON de fallback). Modelo:

```ts
type Lead = {
  id: string;                 // uuid
  createdAt: string;          // ISO
  // contato
  nome: string; email: string; telefone: string;
  consentimentoLGPD: boolean; // obrigatório true
  // empresa (procedência do dado)
  cnpj: string; razaoSocial: string; cnaeDescricao: string;
  regime: 'real' | 'presumido' | 'simples'; porte: string; uf: string;
  // inputs
  faturamentoMensal: number; numColaboradores: number;
  pctMercadoria: number; pctServico: number;
  // resultado
  tesesAplicaveis: string[]; faixaMin: number; faixaMax: number;
  // origem (procedência da campanha)
  utmSource?: string; utmMedium?: string; utmCampaign?: string; referrer?: string;
  // operação
  score: number;              // ver §7
  status: 'novo';
};
```

SQL da tabela (Postgres):

```sql
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY, created_at TIMESTAMPTZ DEFAULT now(),
  nome TEXT, email TEXT, telefone TEXT, consentimento_lgpd BOOLEAN,
  cnpj TEXT, razao_social TEXT, cnae_descricao TEXT, regime TEXT, porte TEXT, uf TEXT,
  faturamento_mensal NUMERIC, num_colaboradores INT, pct_mercadoria INT, pct_servico INT,
  teses_aplicaveis TEXT[], faixa_min NUMERIC, faixa_max NUMERIC,
  utm_source TEXT, utm_medium TEXT, utm_campaign TEXT, referrer TEXT,
  score INT, status TEXT DEFAULT 'novo'
);
```

LGPD: o consentimento é **obrigatório** (bloqueia o envio se desmarcado). Texto do checkbox: *"Autorizo o contato e o tratamento dos meus dados para análise de oportunidades tributárias, conforme a LGPD."* Rejeite o POST sem consentimento.

---

## 7. Score do lead (para o operador priorizar)

Calcule no servidor ao gravar:

```
score = 0
+ faturamentoMensal >= 1_000_000 ? 40 : faturamentoMensal >= 200_000 ? 25 : 10
+ regime === 'real' ? 30 : regime === 'presumido' ? 15 : 0
+ (nº de teses elegíveis) * 10
+ faixaMax >= 500_000 ? 20 : faixaMax >= 100_000 ? 10 : 0
```

Classifique: `>=70 quente`, `40–69 morno`, `<40 frio`. Mostre o score no `/admin` (§8).

---

## 8. Painel mínimo do operador — `/admin`

Página simples (sem auth na POC, proteja só com um token via querystring `?k=ENV_ADMIN_TOKEN`): tabela dos leads ordenada por `score desc`, mostrando contato, empresa, regime, faixa, teses, origem (UTM), data e score com cor (quente/morno/frio). É o que prova que a procedência chega completa ao escritório.

---

## 9. Tela de resultado — copy e conformidade

No `result_full`, mostre:
- **Faixa total** em destaque: "Potencial estimado: **R$ {min} – R$ {max}**".
- **Detalhamento por tese**: nome, faixa, e selo de status ("consolidada" / "em discussão no STF").
- **Confiança**: "Estimativa preliminar baseada em médias do seu setor. O valor exato exige análise dos seus arquivos fiscais (SPED)."
- **Urgência (reforma):** "O prazo de recuperação é de 5 anos e PIS/COFINS migram para a CBS a partir de 2027 — quanto antes a análise, melhor."
- **Disclaimer obrigatório (OAB / Provimento 205/2021):** *"Este resultado é uma estimativa informativa e não constitui promessa de resultado, garantia de êxito ou consultoria jurídica. Valores efetivos dependem de análise técnica individual."* Nunca exiba valores de honorários.
- **CTA:** "Falar com um especialista".

---

## 10. Estrutura de arquivos sugerida

```
app/
  page.tsx                     # jornada (client component, máquina de estados)
  admin/page.tsx               # painel de leads
  api/cnpj/[cnpj]/route.ts     # enriquecimento
  api/estimate/route.ts        # motor de teses
  api/lead/route.ts            # captura
lib/
  cnpj.ts                      # fetch + normalização + classifySetor + isMonofasico
  teses.ts                     # CONFIG + funções das teses + total + score
  db.ts                        # postgres ou fallback json
  format.ts                    # máscara CNPJ, formato R$, validações
components/
  Stepper, MirrorCard, InputsForm, ResultLocked, GateForm, ResultFull
types.ts
```

---

## 11. Fora de escopo (NÃO faça — manter mínimo)

Sem login, sem pagamento, sem upload/parse de SPED, sem cálculo exato, sem integração real de CRM (basta gravar o lead), sem multi-idioma, sem testes E2E. Apenas o funil ponta a ponta funcionando.

---

## 12. Critérios de aceite (como validamos)

1. Digitar um CNPJ real ativo → ver Razão Social, CNAE, regime e porte corretos (BrasilAPI).
2. CNPJ de empresa do **Simples** → cai no caminho Simples, sem teses de PIS/COFINS, mas ainda captura lead.
3. CNPJ de comércio/indústria em **Lucro Real** → Tese 1 (e monofásico se aplicável) elegíveis, faixa coerente e não-zero.
4. CNPJ de serviços → Tese 2 (ISS) elegível, com selo "em discussão".
5. Resultado bloqueado → após preencher o gate (nome/e-mail/telefone + consentimento) → detalhamento desbloqueia.
6. Lead aparece em `/admin` com todos os dados, UTMs e score.
7. Enviar sem consentimento LGPD → bloqueado.
8. Disclaimer OAB visível no resultado; nenhum valor de honorário exibido.
9. Deploy na Vercel funciona sem servidor Python.

---

## 13. Ordem de construção

1. Scaffold Next.js + Tailwind + `types.ts` + `lib/format.ts` (máscara/validação CNPJ).
2. `lib/cnpj.ts` + `api/cnpj/[cnpj]` (testar com CNPJ real).
3. `lib/teses.ts` (CONFIG + teses + total + score) + `api/estimate`.
4. UI da jornada (`page.tsx`) com a máquina de estados até `result_locked`.
5. `GateForm` + `api/lead` + `lib/db.ts`.
6. `result_full` com copy e disclaimers.
7. `/admin`.
8. Polir estados de erro/loading, responsividade, e validar pelos critérios da §12.

> Entregue rodando localmente (`npm run dev`) e pronto para `vercel deploy`. Documente as env vars no README (`DATABASE_URL` opcional, `ADMIN_TOKEN`).
