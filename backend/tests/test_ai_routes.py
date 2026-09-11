import os

from fastapi.testclient import TestClient

os.environ.setdefault("GEMINI_API_KEY", "test-key")

from app.main import app

client = TestClient(app)


def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_ai_chat_returns_error_when_service_fails(monkeypatch):
    def raise_error(*args, **kwargs):
        raise RuntimeError("Gemini unavailable")

    import app.routes.ai as ai_route

    monkeypatch.setattr(ai_route.gemini_service, "get_response", raise_error)

    response = client.post("/ai/chat", json={"message": "Is my dog okay?"})

    assert response.status_code == 503
    assert "unavailable" in response.json()["detail"].lower()
