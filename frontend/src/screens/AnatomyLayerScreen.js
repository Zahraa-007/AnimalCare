import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import ScreenContainer from "../components/ScreenContainer";
import { getDogBodyPartById } from "../data/anatomyData";

export default function AnatomyLayerScreen({ route, navigation }) {
  const { bodyPartId, layerId } = route.params;
  const bodyPart = getDogBodyPartById(bodyPartId);

  if (!bodyPart) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Body part not found.</Text>
      </ScreenContainer>
    );
  }

  const selectedLayer =
    bodyPart.layers.find((layer) => layer.id === layerId) || bodyPart.layers[0];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBlock}>
          <Text style={styles.eyebrow}>{bodyPart.name}</Text>
          <Text style={styles.title}>{selectedLayer.name}</Text>
        </View>

        <View style={styles.illustrationCard}>
          <Text style={styles.illustrationText}>
            Anatomical illustration placeholder
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>{selectedLayer.description}</Text>
        </View>

        <Text style={styles.sectionTitle}>Structures</Text>

        <View style={styles.structureList}>
          {selectedLayer.structures.map((structure) => (
            <TouchableOpacity
              key={structure.id}
              style={styles.structureItem}
              onPress={() =>
                navigation.navigate("StructureDetail", {
                  bodyPartId,
                  layerId,
                  structureId: structure.id,
                })
              }
              activeOpacity={0.9}
            >
              <Text style={styles.structureName}>{structure.name}</Text>
              <Text style={styles.structureMeta}>Educational overview</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    color: "#2EA98A",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#11233B",
  },
  illustrationCard: {
    backgroundColor: "#EAF7F2",
    borderRadius: 24,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#D4F1E5",
  },
  illustrationText: {
    color: "#2E7E66",
    fontSize: 16,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#8BA1C6",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#455A73",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#172B40",
    marginBottom: 12,
  },
  structureList: {
    gap: 10,
  },
  structureItem: {
    backgroundColor: "#F6F8FF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#DCE5F4",
  },
  structureName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#18314D",
    marginBottom: 4,
  },
  structureMeta: {
    fontSize: 13,
    color: "#5E728B",
  },
});
