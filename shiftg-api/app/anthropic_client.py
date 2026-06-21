from functools import lru_cache

from anthropic import AsyncAnthropic

from .config import settings


@lru_cache(maxsize=1)
def get_client() -> AsyncAnthropic:
    """Async Anthropic client, created once and reused.

    The key comes from settings (ANTHROPIC_API_KEY). If it is missing, the SDK
    raises on the first call — handled in the routes as a 503.
    """
    return AsyncAnthropic(api_key=settings.anthropic_api_key)
