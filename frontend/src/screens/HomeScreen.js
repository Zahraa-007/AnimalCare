import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import { featureCards } from "../data/appData";

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>AnimalCare</Text>
        <Text style={styles.title}>Learn how Animals work and stay healthy.</Text>
        <Text style={styles.subtitle}>
          Explore anatomy, disease patterns, injuries, and guidance for animal
          health education.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Explore</Text>

      {featureCards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={[styles.card, { borderLeftColor: card.accent }]}
          onPress={() =>
            navigation.navigate(
              card.id === "anatomy"
                ? "Anatomy"
                : card.id === "diseases"
                  ? "Diseases"
                  : card.id === "injuries"
                    ? "Injuries"
                    : "AI Assistant",
            )
          }
          activeOpacity={0.9}
        >
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardText}>{card.description}</Text>
        </TouchableOpacity>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: "#EAF1FF",
    borderRadius: 24,
    padding: 22,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#D7E7FF",
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#3F6FD8",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#11233B",
    marginBottom: 10,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    color: "#53657A",
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1D2A39",
    marginBottom: 14,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 5,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#8DA3C7",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#18273F",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#53657A",
    lineHeight: 21,
  },
});
