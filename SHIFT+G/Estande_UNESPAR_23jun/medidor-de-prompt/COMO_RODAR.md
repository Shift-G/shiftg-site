# Medidor de Prompt — Shift+G · Como rodar

Atração interativa do estande: a pessoa escreve um prompt, a **IA do Claude** analisa, dá uma nota, mostra os pontos fortes/fracos e reescreve o prompt. No fim, captura o e-mail. Os leads ficam salvos num arquivo `leads.csv`.

A chave da API fica **só no notebook** (nunca no navegador), por isso roda um pequeno servidor local.

---

## 1) Pré-requisitos (uma vez)

1. **Node.js 18 ou superior.** Baixe em https://nodejs.org (versão LTS). Para conferir, no terminal: `node --version`.
2. **Chave da API da Anthropic.** Pegue em https://console.anthropic.com → *API Keys*. Começa com `sk-ant-...`. (Cada análise é uma chamada barata; deixe um limite de gasto configurado no painel, por segurança.)

---

## 2) Rodar (no dia / para testar)

Abra o terminal **na pasta `prompt-scorer`** e rode:

**Mac / Linux**
```bash
export ANTHROPIC_API_KEY="cole-sua-chave-aqui"
node server.js
```

**Windows (PowerShell)**
```powershell
$env:ANTHROPIC_API_KEY="cole-sua-chave-aqui"
node server.js
```

Vai aparecer:
```
▶ http://localhost:3000
Modo: IA REAL (claude-haiku-4-5-20251001)
```

Abra **http://localhost:3000** no navegador. Pronto.

> **Sem a chave configurada**, o sistema roda em **modo demo** (análise offline, mais simples). Serve para testar — e funciona como rede de segurança se a internet do estande cair, em vez de mostrar tela quebrada.

---

## 3) Montagem no estande

**Opção A — só um notebook (mais simples):** abra `http://localhost:3000` em tela cheia (F11) e deixe na mesa. As pessoas usam ali.

**Opção B — notebook + tablet/celular:**
1. Ligue o notebook e o tablet **no mesmo wifi** (de preferência **um hotspot 4G seu** — o wifi do campus costuma bloquear comunicação entre aparelhos).
2. Descubra o IP do notebook:
   - Mac: *Ajustes → Wi-Fi → Detalhes* (algo como `192.168.x.x`)
   - Windows: `ipconfig` → "Endereço IPv4"
3. No tablet, abra `http://SEU-IP:3000` (ex.: `http://192.168.1.20:3000`).

---

## 4) Onde ficam os leads

Todo e-mail capturado é gravado em **`leads.csv`**, na própria pasta. Abre direto no Excel.
Colunas: data, nome, e-mail, nota, nível, prompt.

> No fim do dia, copie esse arquivo. É o seu resultado do evento.

---

## 5) Ajustes rápidos

- **Análise mais profunda (e um pouco mais lenta):** troque o modelo para o Sonnet.
  Mac/Linux: `export MODEL="claude-sonnet-4-6"` antes do `node server.js`.
  O padrão é o **Haiku**, mais rápido — ideal para fila de estande.
- **Mudar a porta:** `export PORT=8080`.
- **Frases de exemplo / textos:** ficam no topo do `index.html` (procure por `exemplos`).

---

## 6) Se algo der errado

- *"command not found: node"* → o Node não está instalado (passo 1).
- *Página abre mas a análise falha* → confira se a chave está certa e se há internet. Mesmo assim, ele cai no modo demo automaticamente.
- *Tablet não abre pelo IP* → quase sempre é o wifi bloqueando. Use um hotspot 4G.
- *Tela em branco* → rode o `node server.js` **dentro** da pasta `prompt-scorer` (onde estão o `server.js` e o `index.html`).

---

**Dica de ouro pro estande:** depois que a pessoa vê a nota, o pulo do gato é dizer:
*"Quer que a Shift+G faça a sua empresa inteira pontuar 100 em IA? Deixa seu e-mail que a gente conversa."*
