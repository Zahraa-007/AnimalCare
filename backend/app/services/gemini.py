import os
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
from google import genai


BASE_DIR = Path(__file__).resolve().parents[2]
ENV_PATH = BASE_DIR / ".env"

load_dotenv(ENV_PATH)

class GeminiService:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        model_name = os.getenv("GEMINI_MODEL", "gemini-3.6-flash")

        if not api_key:
            raise ValueError(
                "GEMINI_API_KEY is missing. Add it to the backend/.env file."
            )

        self.client = genai.Client(api_key=api_key)
        self.model_name = model_name

    def build_prompt(
        self,
        message: str,
        context: Optional[dict] = None
    ) -> str:

        prompt = """
You are AnimalCare AI, an educational assistant focused exclusively on dogs.

Your purpose is to help users learn about:
- Canine anatomy
- Dog health awareness
- Dog behavior
- General dog care
- Common health problems and warning signs

Your answers must be:
- Clear and easy to understand for non-experts.
- Factual, calm, and educational.
- Concise but sufficiently informative.
- Structured with bullet points when useful.

Medical safety rules:
- You are NOT a veterinarian and must never present yourself as one.
- Do not diagnose a dog's condition.
- Do not say that a symptom definitely means a specific disease.
- Do not prescribe medication or provide medication dosages.
- Do not provide dangerous treatment or procedure instructions.
- When discussing symptoms or possible health problems, explain that a veterinarian may need to examine the dog.
- If the user describes a possible emergency such as difficulty breathing, unconsciousness, severe bleeding, poisoning, major trauma, seizures, or severe pain, clearly recommend contacting a veterinarian or emergency veterinary service immediately.

Scope:
- Keep the conversation focused on dogs and topics relevant to AnimalCare.
- If the question is unrelated to dogs, politely explain that you are designed to help with dog-related topics and redirect the user to a relevant dog-related question.
- Never claim that you examined the dog or can determine its condition remotely.

Anatomy:
- When an anatomical structure is mentioned, explain what it is, where it is located, and its main function when relevant.
- Use correct canine anatomical terminology while explaining technical terms in simple language.
""".strip()

        if context:
            body_part = context.get("bodyPart")
            layer = context.get("layer")
            structure = context.get("structure")

            context_parts = []

            if body_part:
                context_parts.append(f"Body part: {body_part}")

            if layer:
                context_parts.append(f"Anatomical layer: {layer}")

            if structure:
                context_parts.append(f"Structure: {structure}")

            if context_parts:
                prompt += (
                    "\n\nCurrent learning context:\n"
                    + "\n".join(context_parts)
                    + "\nUse this context when it is relevant to the user's question."
                )

        prompt += f"\n\nUser question:\n{message}"

        return prompt

    def get_response(
        self,
        message: str,
        context: Optional[dict] = None
    ) -> str:
        if not message or not message.strip():
            raise ValueError("message must not be empty")

        prompt = self.build_prompt(message.strip(), context)

        try:
            response = self.client.models.generate_content(
                model=self.model_name,
                contents=prompt,
            )
            reply = getattr(response, "text", None)
            if not reply or not reply.strip():
                raise RuntimeError("Gemini returned an empty response.")
            return reply.strip()
        except Exception as exc:
            raise RuntimeError("Gemini request failed") from exc

