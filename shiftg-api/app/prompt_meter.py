"""Prompt Meter — Shift+G.

Scores the quality of a prompt (0-100) across 6 criteria, rewrites it, and
captures a lead. Ported from the original Node `server.js`.

Note: identifiers and comments are in English; all user-facing strings
(rubric, criterion names, levels, comments, rewritten prompt) stay in pt-BR.
"""

import json
import logging
import re
from datetime import datetime, timezone

from fastapi import APIRouter, BackgroundTasks, HTTPException
from pydantic import BaseModel, Field

from .anthropic_client import get_client
from .config import settings
from .email_service import send_email

SITE_URL = "https://shiftg.com.br"
LOGO_URL = "https://shift-gnosis-221556120598-us-east-1-an.s3.us-east-1.amazonaws.com/assets/images/shift-gnosis-logo-light-mode.png"

log = logging.getLogger("prompt_meter")
router = APIRouter(prefix="/prompt-meter", tags=["prompt-meter"])

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")

# User-facing rubric (pt-BR) sent to the model.
SYSTEM = """Você é o "Medidor de Prompt" da Shift+G, uma empresa de tecnologia e IA.
Sua tarefa: avaliar a QUALIDADE de um prompt que um usuário escreveria para uma IA, com rigor justo e tom didático, encorajador e direto. Escreva tudo em português do Brasil.

Avalie estes 6 critérios, cada um de 0 a 100:
1. Objetivo — está claro o que a pessoa quer que a IA faça?
2. Contexto — há informação de fundo suficiente (situação, dados, público)?
3. Papel/Persona — o prompt define um papel/especialidade para a IA?
4. Formato de saída — especifica como a resposta deve ser (formato, tamanho, estrutura)?
5. Restrições — há limites, regras, tom, o que evitar, o que priorizar?
6. Especificidade — é concreto e específico, em vez de vago e genérico?

Calcule o campo "score" geral (0-100) como uma média ponderada coerente com os critérios.
Dê 1-3 "strengths" e 2-4 "improvements" — cada melhoria deve ser uma DICA ACIONÁVEL e curta.
Reescreva o prompt do usuário em uma versão claramente melhor ("rewritten_prompt"), aplicando as melhorias. Se o prompt original for muito vago, faça suposições razoáveis e use [colchetes] onde a pessoa deveria preencher algo.
O campo "summary" é uma frase honesta sobre o estado do prompt.
Os critérios devem vir nesta ordem, com o campo "name" exatamente assim: Objetivo, Contexto, Papel/Persona, Formato de saída, Restrições, Especificidade."""

# Structured Outputs: guarantees valid JSON without fragile markdown parsing.
ANALYSIS_SCHEMA = {
    "type": "object",
    "properties": {
        "score": {"type": "integer"},
        "summary": {"type": "string"},
        "criteria": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"},
                    "score": {"type": "integer"},
                    "comment": {"type": "string"},
                },
                "required": ["name", "score", "comment"],
                "additionalProperties": False,
            },
        },
        "strengths": {"type": "array", "items": {"type": "string"}},
        "improvements": {"type": "array", "items": {"type": "string"}},
        "rewritten_prompt": {"type": "string"},
    },
    "required": ["score", "summary", "criteria", "strengths", "improvements", "rewritten_prompt"],
    "additionalProperties": False,
}


def level_from_score(n: int) -> str:
    """Map a score to a user-facing level label (pt-BR)."""
    if n >= 85:
        return "Arquiteto de Inteligência"
    if n >= 70:
        return "Avançado"
    if n >= 50:
        return "Praticante"
    if n >= 30:
        return "Aprendiz"
    return "Iniciante"


async def analyze_with_claude(prompt: str) -> dict:
    client = get_client()
    message = await client.messages.create(
        model=settings.prompt_meter_model,
        max_tokens=2000,
        system=SYSTEM,
        messages=[{"role": "user", "content": f'Avalie este prompt:\n\n"""{prompt}"""'}],
        output_config={"format": {"type": "json_schema", "schema": ANALYSIS_SCHEMA}},
    )
    if message.stop_reason == "refusal":
        raise RuntimeError("Model refused the request.")
    text = "".join(b.text for b in message.content if b.type == "text")
    return json.loads(text)


def analyze_demo(prompt: str) -> dict:
    """Offline heuristic. Safety net if the AI / internet fails at the booth."""
    p = (prompt or "").strip()
    low = p.lower()
    words = len(p.split()) if p else 0

    def clamp(n: float) -> int:
        return max(5, min(100, round(n)))

    def has(terms: list[str]) -> bool:
        return any(t in low for t in terms)

    objective = clamp((70 if has(["crie", "escreva", "gere", "faça", "analise", "resuma", "liste", "explique", "traduza", "planeje"]) else 35) + min(words, 25))
    context = clamp((65 if re.search(r"(porque|para|contexto|sou|somos|minha empresa|público|cliente)", low) else 25) + min(words / 2, 25))
    role = clamp(80 if re.search(r"(aja como|você é|atue como|como um|especialista|consultor)", low) else 15)
    output_format = clamp(80 if re.search(r"(em formato|tabela|lista|bullet|tópicos|markdown|json|parágrafo|palavras|itens|passo a passo)", low) else 25)
    constraints = clamp(70 if re.search(r"(não|evite|tom|formal|informal|máximo|mínimo|apenas|somente|priorize)", low) else 30)
    specificity = clamp(75 if words >= 25 else 55 if words >= 12 else 30)

    criteria = [
        {"name": "Objetivo", "score": objective, "comment": "A intenção principal aparece." if objective > 60 else "Diga com um verbo claro o que você quer (crie, analise, resuma...)."},
        {"name": "Contexto", "score": context, "comment": "Há algum contexto." if context > 60 else "Explique a situação, para quem é e por quê."},
        {"name": "Papel/Persona", "score": role, "comment": "Você definiu um papel para a IA." if role > 60 else "Dê um papel à IA (ex.: 'aja como um especialista em...')."},
        {"name": "Formato de saída", "score": output_format, "comment": "O formato esperado está indicado." if output_format > 60 else "Diga o formato: tabela, lista, nº de palavras, tom."},
        {"name": "Restrições", "score": constraints, "comment": "Há limites/critérios." if constraints > 60 else "Inclua restrições: tom, tamanho, o que evitar."},
        {"name": "Especificidade", "score": specificity, "comment": "Bom nível de detalhe." if specificity > 60 else "Troque termos vagos por detalhes concretos."},
    ]
    score = round(sum(c["score"] for c in criteria) / len(criteria))
    improvements = [c["comment"] for c in criteria if c["score"] < 60][:4]
    return {
        "score": score,
        "summary": "Bom prompt — uns ajustes e fica nível arquiteto." if score >= 70 else "Há uma boa base, mas dá pra deixar bem mais forte.",
        "criteria": criteria,
        "strengths": [f"{c['name']}: {c['comment']}" for c in criteria if c["score"] >= 65][:3],
        "improvements": improvements or ["Adicione contexto e formato de saída para subir de nível."],
        "rewritten_prompt": (
            f"Aja como um especialista no tema. Contexto: [explique sua situação e seu público].\n"
            f"Tarefa: {p or '[o que você quer]'}.\n"
            f"Formato da resposta: [ex.: lista de 5 itens, tom profissional].\n"
            f"Restrições: [o que evitar / priorizar]."
        ),
    }


class AnalyzeRequest(BaseModel):
    prompt: str = Field(..., min_length=1)


class TestEmailRequest(BaseModel):
    email: str


class Criterion(BaseModel):
    name: str
    score: int
    comment: str


class LeadRequest(BaseModel):
    email: str
    name: str | None = None
    score: int | None = None
    level: str | None = None
    prompt: str | None = None
    # Full analysis (optional) — used to build the diagnosis email.
    summary: str | None = None
    criteria: list[Criterion] | None = None
    strengths: list[str] | None = None
    improvements: list[str] | None = None
    rewritten_prompt: str | None = None


@router.post("/analyze")
async def analyze(req: AnalyzeRequest) -> dict:
    prompt = req.prompt.strip()
    if not prompt:
        raise HTTPException(status_code=400, detail="Prompt vazio.")

    if settings.anthropic_api_key:
        try:
            result = await analyze_with_claude(prompt)
            result["mode"] = "ai"
        except Exception as e:  # noqa: BLE001 — any failure degrades to demo (keeps the booth running)
            # Visible in Railway logs (invalid key, SDK, network, JSON...).
            log.warning("AI analysis failed, falling back to demo: %s", e)
            result = analyze_demo(prompt)
            result["mode"] = "demo"
    else:
        result = analyze_demo(prompt)
        result["mode"] = "demo"

    result["score"] = max(0, min(100, round(result["score"])))
    result["level"] = level_from_score(result["score"])  # always computed here for consistency
    return result


def _html_escape(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def build_diagnosis_email(req: LeadRequest) -> tuple[str, str, str]:
    """Build (subject, html, text) for the diagnosis email. Content is pt-BR."""
    blue = "#003FCD"
    score = req.score if req.score is not None else 0
    level = req.level or "—"
    greeting = f"Olá, {_html_escape(req.name)}!" if req.name else "Olá!"

    subject = f"✨ Seu prompt melhorado pela Shift+G — {score}/100"

    rows = ""
    for c in req.criteria or []:
        rows += (
            f'<tr><td style="padding:6px 0;color:#13182b">{_html_escape(c.name)}</td>'
            f'<td style="padding:6px 0;text-align:right;font-weight:700;color:{blue}">{c.score}</td></tr>'
        )
    criteria_block = (
        f'<table style="width:100%;border-collapse:collapse;margin:8px 0 4px">{rows}</table>' if rows else ""
    )

    def bullet_list(items: list[str] | None) -> str:
        if not items:
            return ""
        lis = "".join(f"<li style='margin:4px 0'>{_html_escape(x)}</li>" for x in items)
        return f"<ul style='margin:8px 0;padding-left:18px;color:#13182b'>{lis}</ul>"

    strengths_block = (
        f"<h3 style='font-size:14px;margin:18px 0 4px;color:#13182b'>O que você mandou bem</h3>{bullet_list(req.strengths)}"
        if req.strengths
        else ""
    )
    improvements_block = (
        f"<h3 style='font-size:14px;margin:18px 0 4px;color:#13182b'>Como subir de nível</h3>{bullet_list(req.improvements)}"
        if req.improvements
        else ""
    )
    rewritten_block = ""
    if req.rewritten_prompt:
        rewritten_block = (
            f"<div style='font-family:Georgia,\"Times New Roman\",serif;font-size:21px;color:#13182b;margin:0 0 10px'>Seu prompt, reescrito <span style='color:{blue}'>✨</span></div>"
            "<pre style='white-space:pre-wrap;word-break:break-word;background:#f7f9ff;border:1px solid #d6e0ff;"
            f"border-left:4px solid {blue};border-radius:12px;padding:18px;font-size:13px;line-height:1.6;"
            "color:#13182b;font-family:Menlo,Consolas,monospace;margin:0'>"
            f"{_html_escape(req.rewritten_prompt)}</pre>"
        )
    summary_block = (
        f"<p style='color:#5b6172;font-size:15px;margin:4px 0 0'>{_html_escape(req.summary)}</p>"
        if req.summary
        else ""
    )

    serif = "Georgia,'Times New Roman',serif"
    html = f"""<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#eef1f8;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1f8">
  <tr><td align="center" style="padding:28px 16px">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

      <!-- header / logo -->
      <tr><td align="center" style="padding:8px 0 22px">
        <img src="{LOGO_URL}" alt="SHIFT+G" height="36" style="display:block;height:36px;border:0;outline:none;text-decoration:none">
      </td></tr>

      <!-- card -->
      <tr><td style="background:#ffffff;border:1px solid #e6e8ef;border-radius:18px;padding:34px 30px">

        <div style="font-family:monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:{blue}">Medidor de Prompt</div>
        <div style="font-family:{serif};font-size:26px;color:#13182b;line-height:1.15;margin:8px 0 6px">{greeting}</div>
        <p style="color:#5b6172;font-size:15px;line-height:1.6;margin:0 0 22px">Pegamos o que você escreveu e devolvemos uma versão mais forte — pronta para copiar e colar na sua IA.</p>

        <!-- score -->
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 26px">
          <tr>
            <td valign="middle" style="font-family:{serif};font-size:52px;color:{blue};line-height:1;padding-right:16px">{score}<span style="font-size:18px;color:#9aa0ad">/100</span></td>
            <td valign="middle">
              <span style="display:inline-block;background:{blue};color:#fff;font-weight:700;font-size:12px;border-radius:30px;padding:6px 14px">{_html_escape(level)}</span>
              {summary_block}
            </td>
          </tr>
        </table>

        <!-- the star: rewritten prompt -->
        {rewritten_block}

        {improvements_block}
        {strengths_block}
        {criteria_block}

        <!-- CTA -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px">
          <tr><td align="center">
            <a href="{SITE_URL}" style="display:inline-block;background:{blue};color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:15px 26px;border-radius:11px">Quero levar IA para minha empresa →</a>
          </td></tr>
        </table>

      </td></tr>

      <!-- footer -->
      <tr><td align="center" style="padding:20px 0 0;color:#9aa0ad;font-size:12px;line-height:1.5">
        SHIFT+G · Arquitetamos inteligência<br>
        <a href="{SITE_URL}" style="color:#9aa0ad;text-decoration:underline">{SITE_URL.replace("https://", "")}</a>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>"""

    text_lines = [
        f"{greeting}",
        "",
        f"Diagnóstico do seu prompt: {score}/100 — nível {level}.",
    ]
    if req.summary:
        text_lines.append(req.summary)
    if req.improvements:
        text_lines += ["", "Como subir de nível:"] + [f"- {x}" for x in req.improvements]
    if req.rewritten_prompt:
        text_lines += ["", "Seu prompt reescrito:", req.rewritten_prompt]
    text_lines += ["", f"Fale com a Shift+G: {SITE_URL}"]
    text = "\n".join(text_lines)

    return subject, html, text


@router.post("/lead")
def save_lead(req: LeadRequest, background: BackgroundTasks) -> dict:
    if not EMAIL_RE.match(req.email):
        raise HTTPException(status_code=400, detail="E-mail inválido.")
    if not settings.mongo_url:
        raise HTTPException(status_code=503, detail="Banco de dados não configurado.")

    document = {
        "created_at": datetime.now(timezone.utc),
        "name": req.name or "",
        "email": req.email,
        "score": req.score,
        "level": req.level or "",
        "prompt": req.prompt or "",
        "summary": req.summary or "",
        "criteria": [c.model_dump() for c in req.criteria] if req.criteria else [],
        "strengths": req.strengths or [],
        "improvements": req.improvements or [],
        "rewritten_prompt": req.rewritten_prompt or "",
    }

    from .db import leads_collection

    try:
        leads_collection().insert_one(document)
    except Exception as e:  # noqa: BLE001
        # Log the full lead so it is recoverable even if the write failed.
        log.error("Failed to store lead in MongoDB: %s | lead=%s", e, document)
        raise HTTPException(status_code=503, detail="Não foi possível salvar agora. Tente de novo.")

    # Send the diagnosis email in the background (best-effort, won't block the response).
    subject, html, text = build_diagnosis_email(req)
    background.add_task(send_email, to_email=req.email, to_name=req.name, subject=subject, html=html, text=text)

    return {"ok": True}


@router.post("/test-email")
async def test_email(req: TestEmailRequest) -> dict:
    """Synchronous send for investigation: returns the real MailerSend result
    (status + error body), instead of swallowing it like the background flow."""
    if not EMAIL_RE.match(req.email):
        raise HTTPException(status_code=400, detail="E-mail inválido.")
    return await send_email(
        to_email=req.email,
        to_name=None,
        subject="Teste — Medidor de Prompt (Shift+G)",
        html="<p>Funcionou! Este é um teste de envio do Medidor de Prompt.</p>",
        text="Funcionou! Este é um teste de envio do Medidor de Prompt.",
    )
