# SHIFT+G API

API FastAPI com integração à Anthropic (Claude), pronta para deploy no Railway via Docker.

## Endpoints

| Método | Rota           | Descrição                                  |
| ------ | -------------- | ------------------------------------------ |
| GET    | `/`            | Status básico                              |
| GET    | `/health`      | Healthcheck (usado pelo Railway)           |
| GET    | `/docs`        | Swagger UI (interativo)                     |
| POST   | `/chat`        | Resposta única (não-streaming)             |
| POST   | `/chat/stream` | Streaming via SSE (respostas longas)        |
| POST   | `/prompt-meter/analyze` | Medidor de Prompt: pontua e reescreve um prompt |
| POST   | `/prompt-meter/lead`    | Salva lead (nome, e-mail, nota) no MongoDB |

Modelo padrão: `claude-opus-4-8` com adaptive thinking ligado.

### Body de `/chat` e `/chat/stream`

```json
{
  "messages": [{ "role": "user", "content": "Olá, Claude" }],
  "system": "Você é um assistente da SHIFT+G.",
  "model": "claude-opus-4-8",
  "max_tokens": 16000,
  "thinking": true
}
```

`system`, `model`, `max_tokens` e `thinking` são opcionais.

## Rodar local

```bash
cd shiftg-api
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # preencha ANTHROPIC_API_KEY
uvicorn app.main:app --reload
```

Abra http://localhost:8000/docs

Teste rápido:

```bash
curl -s http://localhost:8000/chat \
  -H "content-type: application/json" \
  -d '{"messages":[{"role":"user","content":"Diga oi em uma frase"}]}'
```

## Rodar com Docker

```bash
docker build -t shiftg-api .
docker run -p 8000:8000 -e ANTHROPIC_API_KEY=sk-ant-... shiftg-api
```

## Deploy no Railway

1. Suba esta pasta (`shiftg-api/`) para um repositório no GitHub.
2. No Railway: **New Project → Deploy from GitHub repo** e selecione o repo.
   - O Railway detecta o `Dockerfile` e usa o `railway.json` (build + healthcheck).
   - Se a API estiver numa subpasta do repo, defina o **Root Directory** = `shiftg-api`.
3. Em **Variables**, adicione:
   - `ANTHROPIC_API_KEY` = sua chave
   - (opcional) `ANTHROPIC_MODEL`, `MAX_TOKENS`, `CORS_ORIGINS`
4. Deploy. O Railway injeta `PORT` automaticamente; a app já faz bind em `0.0.0.0:$PORT`.

> Variáveis de ambiente: defina-as em **Variables** no Railway — nunca commite o `.env`.

## Variáveis de ambiente

| Variável            | Padrão            | Descrição                                  |
| ------------------- | ----------------- | ------------------------------------------ |
| `ANTHROPIC_API_KEY` | —                 | **Obrigatória.** Chave da API Anthropic.   |
| `ANTHROPIC_MODEL`   | `claude-opus-4-8` | Modelo padrão.                              |
| `MAX_TOKENS`        | `16000`           | Limite de tokens de saída (não-streaming).  |
| `CORS_ORIGINS`      | `*`               | Origens permitidas, separadas por vírgula.  |
| `PROMPT_METER_MODEL`| `claude-haiku-4-5`| Modelo do Medidor de Prompt (Haiku = rápido).|
| `MONGO_URL`         | —                 | Conexão MongoDB onde os leads são gravados.  |
| `MONGO_DB`          | `shiftg`          | Nome do banco no MongoDB.                     |
| `MAILERSEND_API_KEY`| —                 | Chave da MailerSend (vazia = e-mail desligado).|
| `MAILERSEND_NO_REPLY_EMAIL` | —         | Remetente do e-mail de diagnóstico.          |
| `MAILERSEND_NO_REPLY_NAME`  | `SHIFT+G` | Nome do remetente.                            |

## Medidor de Prompt

Atração interativa (porte do `medidor-de-prompt` em Node). O front é a página
`/medidor-de-prompt` no site Next.js (`shiftg-site`), que chama estes endpoints.

- `POST /prompt-meter/analyze` `{ "prompt": "..." }` → score, level, criteria, strengths,
  improvements e rewritten_prompt. Usa **Structured Outputs** (JSON garantido). Sem
  `ANTHROPIC_API_KEY`, ou em qualquer falha de IA, cai automaticamente para um
  **modo demo offline** (heurístico) — rede de segurança para o estande.
- `POST /prompt-meter/lead` `{ "email", "name", "score", "level", "prompt", + análise }` →
  grava no MongoDB (collection `leads` no banco `MONGO_DB`; exige `MONGO_URL`) e dispara o
  **e-mail de diagnóstico** via MailerSend em background (best-effort).

> Os leads são persistidos no MongoDB (Atlas). Se a escrita falhar, a API retorna 503 e
> registra o lead completo nos logs para recuperação manual. O e-mail é enviado em
> background: se a MailerSend falhar ou não estiver configurada, o lead **não** é perdido
> (a falha só é logada).

**Front (site Next.js):** defina `NEXT_PUBLIC_API_URL` apontando para a URL desta API
(ex.: `https://shiftg-api.up.railway.app`). Em dev, o padrão é `http://localhost:8000`.

### Investigar e-mail que não chega

O `/prompt-meter/lead` envia o e-mail em **background**, então a API responde `ok`
mesmo se a MailerSend rejeitar. Para ver a causa real:

1. **Logs** (`make logs` / Railway → Deploy logs). Procure por `email:`. Em falha aparece
   `MailerSend REJECTED email | ... status=<código> body=<motivo>`. No boot, a linha
   `Boot config | ... mailersend_from=...` mostra o que está configurado.
2. **Endpoint de teste** (síncrono — retorna o resultado real, não em background):

   ```bash
   curl -s -X POST "$API/prompt-meter/test-email" \
     -H "content-type: application/json" -d '{"email":"voce@dominio.com"}'
   # ok:false, status:422, body:... → diz exatamente o porquê
   ```
3. `GET /health` mostra `mailersend_configured` e `mailersend_from`.

**Causas mais comuns (MailerSend):**
- **Domínio não verificado** → 422. O domínio de `MAILERSEND_NO_REPLY_EMAIL` precisa estar
  adicionado e verificado (SPF/DKIM) no painel da MailerSend.
- **Conta trial** → só envia para o e-mail do administrador da conta até a conta ser aprovada.
- **Chave inválida** → 401 `Unauthenticated`.

> `LOG_LEVEL` (default `INFO`) controla os logs da app; `UVICORN_LOG_LEVEL` os do servidor.
> `POST /prompt-meter/test-email` é um endpoint de depuração sem autenticação — considere
> removê-lo ou protegê-lo em produção.
