"""Shared rate limiter (per client IP) used by the routers and wired in main."""

from slowapi import Limiter
from slowapi.util import get_remote_address

from .config import settings

# In-memory storage (per process). Fine for a single instance; for multiple
# Railway replicas, point storage_uri at Redis so limits are shared.
limiter = Limiter(
    key_func=get_remote_address,
    enabled=settings.rate_limit_enabled,
)

# Default limit string, e.g. "5/minute". Stricter limit for email-triggering routes.
RATE_LIMIT = settings.rate_limit
EMAIL_RATE_LIMIT = "3/minute"
