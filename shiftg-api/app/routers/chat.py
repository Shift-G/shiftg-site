import json

import anthropic
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse

from ..anthropic_client import get_client
from ..config import settings
from ..schemas import ChatRequest, ChatResponse

router = APIRouter(tags=["chat"])


def _build_kwargs(req: ChatRequest, *, streaming: bool) -> dict:
    """Build the arguments for messages.create / messages.stream."""
    kwargs: dict = {
        "model": req.model or settings.anthropic_model,
        "max_tokens": req.max_tokens or (64000 if streaming else settings.max_tokens),
        "messages": [m.model_dump() for m in req.messages],
    }
    if req.system:
        kwargs["system"] = req.system
    if req.thinking:
        # Adaptive thinking: the model decides when/how much to think.
        # display "summarized" returns a reasoning summary instead of empty text.
        kwargs["thinking"] = {"type": "adaptive", "display": "summarized"}
    return kwargs


@router.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest) -> ChatResponse:
    """Single response (non-streaming). Good for short/medium answers."""
    if not settings.anthropic_api_key:
        raise HTTPException(status_code=503, detail="ANTHROPIC_API_KEY não configurada.")

    client = get_client()
    try:
        message = await client.messages.create(**_build_kwargs(req, streaming=False))
    except anthropic.AuthenticationError:
        raise HTTPException(status_code=503, detail="Chave da Anthropic inválida.")
    except anthropic.RateLimitError:
        raise HTTPException(status_code=429, detail="Rate limit atingido. Tente de novo.")
    except anthropic.APIStatusError as e:
        raise HTTPException(status_code=502, detail=f"Erro da API Anthropic: {e.message}")
    except anthropic.APIConnectionError:
        raise HTTPException(status_code=504, detail="Falha de conexão com a Anthropic.")

    text = "".join(block.text for block in message.content if block.type == "text")
    return ChatResponse(
        text=text,
        model=message.model,
        stop_reason=message.stop_reason,
        input_tokens=message.usage.input_tokens,
        output_tokens=message.usage.output_tokens,
    )


@router.post("/chat/stream")
async def chat_stream(req: ChatRequest) -> StreamingResponse:
    """Streaming via Server-Sent Events (SSE). Recommended for long answers."""
    if not settings.anthropic_api_key:
        raise HTTPException(status_code=503, detail="ANTHROPIC_API_KEY não configurada.")

    client = get_client()

    async def event_generator():
        try:
            async with client.messages.stream(**_build_kwargs(req, streaming=True)) as stream:
                async for text in stream.text_stream:
                    yield f"data: {json.dumps({'text': text})}\n\n"
                final = await stream.get_final_message()
                done = {
                    "done": True,
                    "stop_reason": final.stop_reason,
                    "input_tokens": final.usage.input_tokens,
                    "output_tokens": final.usage.output_tokens,
                }
                yield f"data: {json.dumps(done)}\n\n"
        except anthropic.APIError as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )
