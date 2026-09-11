import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.ai import router as ai_router

app = FastAPI(title="AnimalCare API", version="0.1.0")

cors_origins = os.getenv("CORS_ORIGINS", "*")
allowed_origins = [
    origin.strip() for origin in cors_origins.split(",") if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins if allowed_origins != ["*"] else ["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_router)


@app.get("/health")
async def health_check():
    return {"status": "ok"}
