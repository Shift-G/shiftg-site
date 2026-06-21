from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Configuration loaded from environment variables (and .env in dev)."""

    # Anthropic API key. Set ANTHROPIC_API_KEY in the environment / on Railway.
    anthropic_api_key: str = ""

    # Default model. Opus 4.8 is the most capable; switch to claude-sonnet-4-6
    # (faster/cheaper) or claude-haiku-4-5 if needed.
    anthropic_model: str = "claude-opus-4-8"

    # Default output token limit per request.
    max_tokens: int = 16000

    # Allowed CORS origins, comma-separated. "*" allows all.
    cors_origins: str = "*"

    # Logging level for the app loggers (DEBUG, INFO, WARNING, ...).
    log_level: str = "INFO"

    # Rate limiting (per client IP). Format: "<n>/<period>" e.g. "5/minute".
    rate_limit: str = "5/minute"
    rate_limit_enabled: bool = True

    # Prompt Meter model. Haiku 4.5 = fast/cheap (ideal for the booth queue).
    # Switch to claude-sonnet-4-6 or claude-opus-4-8 for deeper analysis.
    prompt_meter_model: str = "claude-haiku-4-5"

    # MongoDB connection (leads are stored here). Set MONGO_URL on Railway.
    mongo_url: str = ""
    mongo_db: str = "shiftg"

    # MailerSend (transactional email). If unset, email sending is skipped.
    mailersend_api_key: str = ""
    mailersend_no_reply_email: str = ""
    mailersend_no_reply_name: str = "SHIFT+G"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


settings = Settings()
