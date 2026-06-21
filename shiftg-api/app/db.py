from functools import lru_cache

from pymongo import MongoClient
from pymongo.collection import Collection

from .config import settings


@lru_cache(maxsize=1)
def _client() -> MongoClient:
    # Short serverSelectionTimeoutMS: fail fast if Atlas is down so /lead returns
    # an error quickly instead of blocking the booth queue.
    return MongoClient(settings.mongo_url, serverSelectionTimeoutMS=4000)


def leads_collection() -> Collection:
    return _client()[settings.mongo_db]["leads"]
