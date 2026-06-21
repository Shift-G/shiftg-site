import logging

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi.errors import RateLimitExceeded

from . import prompt_meter
from .config import settings
from .rate_limit import limiter
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

# Rate limiting (per client IP). Routes opt in via @limiter.limit(...).
app.state.limiter = limiter


@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded) -> JSONResponse:
    return JSONResponse(
        status_code=429,
        content={"detail": "Muitas requisições. Aguarde um instante e tente de novo."},
        headers={"Retry-After": "60"},
    )


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Business endpoints are versioned under /api/v1. Health/meta stay at the root.
API_V1 = "/api/v1"
app.include_router(chat.router, prefix=API_V1)
app.include_router(prompt_meter.router, prefix=API_V1)


@app.get("/", tags=["meta"])
def root():
    return {"service": "shiftg-api", "status": "ok", "api": API_V1, "docs": "/docs"}


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
