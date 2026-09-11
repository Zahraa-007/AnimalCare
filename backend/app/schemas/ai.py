from typing import Optional

from pydantic import BaseModel, Field, field_validator


class ChatContext(BaseModel):
    bodyPart: Optional[str] = None
    layer: Optional[str] = None
    structure: Optional[str] = None


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    context: Optional[ChatContext] = None

    @field_validator("message")
    @classmethod
    def validate_message(cls, value: str) -> str:
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("message must not be empty")
        return cleaned


class ChatResponse(BaseModel):
    response: str
