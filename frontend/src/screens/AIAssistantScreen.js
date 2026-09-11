import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import { getDogAssistantResponse } from "../services/aiService";

export default function AIAssistantScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Ask a question about dog health and anatomy.",
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setAnswer("Please enter a question to start the conversation.");
      return;
    }

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setAnswer("Thinking...");

    try {
      const response = await getDogAssistantResponse(trimmedQuestion);
      setAnswer(
        response.answer || "I couldn't generate a response. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>AI assistant</Text>
        <Text style={styles.title}>Ask about dog health</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          value={question}
          onChangeText={setQuestion}
          placeholder="Type your question..."
          placeholderTextColor="#7D8EA5"
          style={styles.input}
          multiline
          editable={!isLoading}
        />

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleSubmit}
          activeOpacity={0.9}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Asking..." : "Ask"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.answerLabel}>Response</Text>
        <Text style={styles.answerText}>{answer}</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerBlock: {
    marginBottom: 18,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.1,
    color: "#7F6AE6",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#11233B",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 18,
    shadowColor: "#8BA1C6",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  input: {
    minHeight: 120,
    backgroundColor: "#F3F7FF",
    borderRadius: 16,
    padding: 16,
    fontSize: 15,
    color: "#1E2B3B",
    textAlignVertical: "top",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#5B8DEF",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 18,
  },
  buttonDisabled: {
    backgroundColor: "#A9BDEB",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  answerLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#667A94",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  answerText: {
    fontSize: 15,
    color: "#41516A",
    lineHeight: 24,
  },
});
