FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

# Railway injects $PORT. Binding to 0.0.0.0 is required to be reachable.
# Logs go to stdout (PYTHONUNBUFFERED=1). Tune verbosity with UVICORN_LOG_LEVEL / LOG_LEVEL.
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000} --log-level ${UVICORN_LOG_LEVEL:-info} --access-log"]
