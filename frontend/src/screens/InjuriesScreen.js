import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ScreenContainer from "../components/ScreenContainer";

export default function InjuriesScreen() {
  return (
    <ScreenContainer>
      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>Injury awareness</Text>
        <Text style={styles.title}>Common injuries</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          This screen will later provide educational content on injuries,
          symptoms, and general guidance for dogs and their caregivers.
        </Text>
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
    color: "#E1993A",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#11233B",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#8BA1C6",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  infoText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4D5E73",
  },
});
