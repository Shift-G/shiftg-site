# Estande Shift+G — UNESPAR, 23/06

Kit completo do lead magnet: **escaneia o QR → deixa o e-mail → recebe o guia de IA**.
Você é a única empresa de tecnologia do evento. O objetivo do dia é simples: **sair com a lista de e-mails na mão.**

---

## O que tem no kit

| Arquivo | Para que serve |
|---|---|
| `index.html` | A landing page. É a página que abre quando escaneiam o QR. Já vem com o PDF embutido. |
| `Cartaz_A4_QR.pdf` | Cartaz pronto pra imprimir e colar no estande (com o QR). |
| `qr_estande.png` | O QR code solto, pra usar onde quiser (banner, adesivo, slide). |
| `Guia_IA_ShiftG.pdf` | O material que o visitante recebe. |
| `gerar_qr.py` | Script pra regerar o QR + cartaz com o link final. |

> ⚠️ O QR atual aponta para um link de teste. **Ele só funciona depois dos 3 passos abaixo.**

---

## Antes do dia 23 — 3 passos (≈ 20 min)

### 1) Publicar a página (a mais fácil: Netlify Drop)
1. Acesse **app.netlify.com/drop**
2. Arraste o arquivo `index.html` pra dentro da página.
3. Em segundos aparece um link público (ex.: `https://algo-aleatorio.netlify.app`). **Esse é o seu link.**
4. (Opcional) Em *Site settings → Change site name*, troque pra algo como `shiftg-ia`.

*Alternativas: GitHub Pages, Vercel, ou hospedar no próprio site da Shift+G.*

### 2) Ligar a captura de e-mails (Formspree — grátis)
Sem isso, o visitante recebe o guia, mas **o e-mail não é salvo.**
1. Crie conta em **formspree.io** → *New form*.
2. Copie o endpoint (ex.: `https://formspree.io/f/abcdwxyz`).
3. Abra `index.html`, ache a linha `const FORM_ENDPOINT = "";` e cole o endpoint entre as aspas.
4. Salve e **suba o arquivo de novo** no Netlify (arrasta por cima).
5. Os e-mails passam a cair no seu inbox e no painel do Formspree (dá pra exportar CSV).

### 3) Gerar o QR final com o link real
Duas opções:
- **Me mande o link** que eu te devolvo o `qr_estande.png` e o `Cartaz_A4_QR.pdf` finais na hora. *(mais fácil)*
- Ou rode: `python3 gerar_qr.py "https://seu-link.netlify.app"`

Depois é só **imprimir o `Cartaz_A4_QR.pdf`** (leve 2–3 cópias: mesa, fundo do estande, e um na mão).

---

## No estande — checklist do dia

- [ ] Cartaz com QR bem visível (na altura dos olhos + um na mesa).
- [ ] Testar o QR com 2 celulares diferentes ANTES de abrir.
- [ ] Tablet/celular com a página aberta pra demonstrar.
- [ ] Frase de chamada na boca: *"Quer um guia de IA de graça? Aponta a câmera aqui."*
- [ ] Brinde simples pra puxar fila (bala, adesivo, sorteio) — opcional, mas funciona.
- [ ] No fim do dia: exportar a lista de e-mails do Formspree.

---

## O pitch (decore isso)

**Abertura (5 segundos):**
> "Somos a Shift+G, a única empresa de tecnologia aqui. A gente constrói software e IA sob medida. Posso te dar de presente um guia de IA pra empresa? É só apontar a câmera."

**Se for empresário / gestor (30 segundos):**
> "A gente é uma fábrica de software com IA. Nosso carro-chefe, o NearOne, cuida de saúde mental e riscos psicossociais da equipe — já são mais de 50 mil vidas mapeadas, com clientes grandes. E isso virou obrigação legal pela NR-1. Em 2 minutos eu te mostro como funciona."

**Se for estudante / visitante (30 segundos):**
> "A gente desenvolve software e IA aqui da região pra empresas do Brasil inteiro. Esse guia mostra na prática o que dá pra fazer com IA hoje. Se curte tecnologia, vale seguir a Shift+G — sempre tem vaga e projeto novo."

**Respostas rápidas a objeções:**
- *"IA é caro / é coisa de empresa grande."* → "Pelo contrário. A gente começa por uma dor só, num piloto pequeno e medível. O guia mostra um plano de 30 dias."
- *"Já temos um sistema."* → "Ótimo. A IA não troca o que funciona — ela tira o trabalho repetitivo de cima da sua equipe. Posso te mostrar onde encaixa."
- *"O que é riscos psicossociais?"* → "É a saúde mental e o clima da equipe. A NR-1 agora exige que a empresa gerencie isso. O NearOne faz com IA e ainda te deixa em conformidade."

---

## A jogada extra: as outras 23 empresas

Elas não são concorrentes — são **leads cativos**, e todas com CLT (logo, todas precisam se adequar à NR-1).
Durante o evento, passe em cada estande:
> "Sua empresa já está adequada à NR-1, na parte de riscos psicossociais? A gente resolve isso com IA, já temos 50 mil vidas mapeadas. Te mando o guia — qual seu e-mail?"

Meta realista: **conversar com as 23 e sair com 23 e-mails.**

> 📌 **Confirme antes de usar como argumento:** a data exata de início da fiscalização e das multas da NR-1 (riscos psicossociais) muda conforme prorrogações do Ministério do Trabalho. O argumento "já é obrigação legal" é seguro; cite datas só depois de checar a versão vigente.

---

## (Opcional) Banner roll-up — copy pronta

Se for fazer um banner vertical (80×200 cm), use:

- **Topo:** SHIFT+G · *Arquitetamos inteligência.*
- **Título:** A única fábrica de software e **IA** do evento.
- **Sub:** A gente não vende sistema. Constrói o futuro da sua empresa.
- **3 selos:** +50 mil vidas mapeadas · NearOne (NR-1) · ADERIS (LGPD)
- **Rodapé:** QR grande + *"Aponte a câmera e leve um guia de IA de graça."*
- **Cores:** fundo branco, azul `#003FCD`. Muito respiro, uma ideia forte.
