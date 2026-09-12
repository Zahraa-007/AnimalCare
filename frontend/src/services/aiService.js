const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_BASE_URL || "https://animalcare.fastapicloud.dev";

export const getDogAssistantResponse = async (question, context = null) => {
  const trimmedQuestion = (question || "").trim();

  if (!trimmedQuestion) {
    return {
      answer: "Please enter a question to start the conversation.",
      question: "",
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/ai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: trimmedQuestion,
        context,
      }),
    });

    let data = {};
    try {
      data = await response.json();
    } catch (parseError) {
      data = {};
    }

    if (!response.ok) {
      const detail = data?.detail || `Server error: ${response.status}`;
      throw new Error(detail);
    }

    return {
      answer:
        data.response || "I couldn't generate a response. Please try again.",
      question: trimmedQuestion,
    };
  } catch (error) {
    console.error("AI Assistant Error:", error);

    const message =
      error?.message && error.message.includes("Failed to fetch")
        ? "I couldn't reach the AI service. Please check the backend connection and try again."
        : error?.message ||
          "Sorry, I couldn't connect to the AI assistant. Please try again.";

    return {
      answer: message,
      question: trimmedQuestion,
    };
  }
};
