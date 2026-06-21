from typing import Literal

from pydantic import BaseModel, Field


class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    messages: list[Message] = Field(..., min_length=1)
    system: str | None = Field(default=None, description="Optional system prompt.")
    model: str | None = Field(default=None, description="Overrides the default model.")
    max_tokens: int | None = Field(default=None, ge=1, le=128000)
    thinking: bool = Field(default=True, description="Enables adaptive thinking.")


class ChatResponse(BaseModel):
    text: str
    model: str
    stop_reason: str | None = None
    input_tokens: int
    output_tokens: int
