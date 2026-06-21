import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import prompt_meter
from .config import settings
from .routers import chat

# Configure logging so app logs (email, prompt_meter, ...) show up in Docker stdout.
logging.basicConfig(
    level=settings.log_level.upper(),
    format="%(asctime)s %(levelname)s %(name)s: %(message)s",
)
log = logging.getLogger("startup")
log.info(
    "Boot config | model=%s mongo=%s mailersend_key=%s mailersend_from=%s",
    settings.anthropic_model,
    bool(settings.mongo_url),
    bool(settings.mailersend_api_key),
    settings.mailersend_no_reply_email or "(unset)",
)

app = FastAPI(
    title="SHIFT+G API",
    description="FastAPI service integrated with Anthropic (Claude). Railway-ready.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router)
app.include_router(prompt_meter.router)


@app.get("/", tags=["meta"])
def root():
    return {"service": "shiftg-api", "status": "ok", "docs": "/docs"}


@app.get("/health", tags=["meta"])
def health():
    """Healthcheck used by Railway. Does not expose the key, only whether it is set."""
    return {
        "status": "ok",
        "model": settings.anthropic_model,
        "anthropic_key_configured": bool(settings.anthropic_api_key),
        "mongo_configured": bool(settings.mongo_url),
        "mailersend_configured": bool(settings.mailersend_api_key and settings.mailersend_no_reply_email),
        "mailersend_from": settings.mailersend_no_reply_email or None,
    }
