import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import { getDogBodyPartById } from "../data/anatomyData";

export default function StructureDetailScreen({ route }) {
  const { bodyPartId, layerId, structureId } = route.params || {};
  const bodyPart = getDogBodyPartById(bodyPartId);

  if (!bodyPart) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Body part not found.</Text>
      </ScreenContainer>
    );
  }

  const layer =
    bodyPart.layers.find((item) => item.id === layerId) || bodyPart.layers[0];
  const structure =
    (layer?.structures || []).find((item) => item.id === structureId) ||
    layer?.structures?.[0];

  if (!structure) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Structure not found.</Text>
      </ScreenContainer>
    );
  }

  const safeDescription =
    structure.shortDescription ||
    structure.whatIs ||
    "This structure is part of the dog's anatomy and helps support movement or function.";
  const safeLocation =
    structure.location ||
    "Location details are not yet listed for this educational entry.";
  const safeFunction =
    structure.function ||
    "Function details are not yet listed for this educational entry.";
  const safeProblems =
    Array.isArray(structure.commonProblems) && structure.commonProblems.length
      ? structure.commonProblems
      : ["General discomfort may need veterinary review."];
  const safeEducationalNote =
    structure.educationalNote ||
    "This is an educational overview and not a diagnosis. A veterinarian should evaluate painful or persistent changes.";

  const generalWarningSigns = [
    "Limping or abnormal gait",
    "Pain or sensitivity when touched",
    "Swelling or warmth",
    "Difficulty bearing weight",
    "Abnormal movement or stiffness",
    "Reduced use of a limb",
  ];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBlock}>
          <Text style={styles.eyebrow}>{bodyPart.name}</Text>
          <Text style={styles.title}>{structure.name}</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>{safeDescription}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>What it is</Text>
          <Text style={styles.text}>{structure.whatIs || safeDescription}</Text>

          <Text style={styles.sectionLabel}>Location</Text>
          <Text style={styles.text}>{safeLocation}</Text>

          <Text style={styles.sectionLabel}>Function</Text>
          <Text style={styles.text}>{safeFunction}</Text>

          <Text style={styles.sectionLabel}>Common Problems</Text>
          <Text style={styles.text}>• {safeProblems.join("\n• ")}</Text>

          <Text style={styles.sectionLabel}>
            Signs that may need veterinary attention
          </Text>
          <Text style={styles.text}>• {generalWarningSigns.join("\n• ")}</Text>

          <Text style={styles.sectionLabel}>Educational note</Text>
          <Text style={styles.text}>{safeEducationalNote}</Text>
        </View>

        <Text style={styles.disclaimer}>
          This information is for educational purposes and does not replace
          veterinary examination or diagnosis.
        </Text>
      </ScrollView>
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
    fontSize: 30,
    fontWeight: "800",
    color: "#11233B",
  },
  summaryCard: {
    backgroundColor: "#F4F6FF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDE6FF",
  },
  summaryText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#40546D",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    shadowColor: "#8BA1C6",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#5A6F8D",
    marginTop: 18,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: "#465B74",
  },
  disclaimer: {
    marginTop: 18,
    fontSize: 12,
    lineHeight: 20,
    color: "#6E7D95",
    textAlign: "center",
    paddingBottom: 16,
  },
});
