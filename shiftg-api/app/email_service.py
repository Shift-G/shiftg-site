"""MailerSend transactional email integration (transport only)."""

import logging

import httpx

from .config import settings

log = logging.getLogger("email")

MAILERSEND_URL = "https://api.mailersend.com/v1/email"


async def send_email(
    *,
    to_email: str,
    to_name: str | None,
    subject: str,
    html: str,
    text: str | None = None,
) -> dict:
    """Send a transactional email via MailerSend.

    Best-effort and never raises. Returns a result dict describing the outcome
    so callers (e.g. a test endpoint) can inspect it; the background lead flow
    ignores the return value and relies on the logs.
    """
    if not (settings.mailersend_api_key and settings.mailersend_no_reply_email):
        log.warning(
            "MailerSend not configured (api_key set=%s, from set=%s); skipping email to %s",
            bool(settings.mailersend_api_key),
            bool(settings.mailersend_no_reply_email),
            to_email,
        )
        return {"ok": False, "skipped": True, "reason": "MailerSend não configurado."}

    payload: dict = {
        "from": {
            "email": settings.mailersend_no_reply_email,
            "name": settings.mailersend_no_reply_name,
        },
        "to": [{"email": to_email, "name": to_name or to_email}],
        "subject": subject,
        "html": html,
    }
    if text:
        payload["text"] = text

    headers = {"Authorization": f"Bearer {settings.mailersend_api_key}"}

    log.info(
        "Sending email via MailerSend | from=%s to=%s subject=%r",
        settings.mailersend_no_reply_email,
        to_email,
        subject,
    )

    try:
        async with httpx.AsyncClient(timeout=15) as client:
            resp = await client.post(MAILERSEND_URL, json=payload, headers=headers)
    except Exception as e:  # noqa: BLE001 — network/timeout; best-effort
        log.error("MailerSend request failed (network) for %s: %r", to_email, e)
        return {"ok": False, "error": f"network: {e}"}

    message_id = resp.headers.get("x-message-id")
    body = (resp.text or "").strip()

    if resp.is_success:
        # MailerSend returns 202 Accepted (empty body) on success.
        log.info(
            "MailerSend accepted email | to=%s status=%s message_id=%s",
            to_email,
            resp.status_code,
            message_id,
        )
        return {"ok": True, "status": resp.status_code, "message_id": message_id}

    # 4xx/5xx: log the full body so the real cause is visible in Docker logs
    # (e.g. 422 unverified domain/sender, 401 bad key, trial-account recipient limit).
    log.error(
        "MailerSend REJECTED email | to=%s status=%s message_id=%s body=%s",
        to_email,
        resp.status_code,
        message_id,
        body[:2000],
    )
    return {"ok": False, "status": resp.status_code, "body": body[:2000]}
