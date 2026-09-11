from fastapi import APIRouter, HTTPException

from app.schemas.ai import ChatRequest, ChatResponse
from app.services.gemini import GeminiService

router = APIRouter(prefix="/ai", tags=["ai"])

try:
    gemini_service = GeminiService()
except ValueError:
    gemini_service = None


@router.post("/chat", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):
    if gemini_service is None:
        raise HTTPException(
            status_code=503,
            detail="AI service is not configured. Please add GEMINI_API_KEY to backend/.env.",
        )

    try:
        response_text = gemini_service.get_response(
            message=request.message,
            context=request.context.model_dump() if request.context else None,
        )

        if not response_text or not response_text.strip():
            raise RuntimeError("Gemini returned an empty response.")

        return ChatResponse(response=response_text.strip())
    except Exception as exc:
        raise HTTPException(
            status_code=503,
            detail="AI service is temporarily unavailable. Please try again in a moment.",
        ) from exc
