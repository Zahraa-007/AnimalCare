import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { getDogBodyPartById } from "../data/anatomyData";
import ScreenContainer from "../components/ScreenContainer";

const anatomyImages = {
  frontLeg: require("../../assets/anatomy/Dog_fore_limb_1.png"),
  hindLeg: require("../../assets/anatomy/Dog_hind_limb_1.jpg"),
};

const layerOptions = [
  { id: "bones", name: "Bones", enabled: true },
  { id: "muscles", name: "Muscles", enabled: false },
  { id: "skin", name: "Skin", enabled: false },
  { id: "organs", name: "Organs", enabled: false },
];

export default function AnatomyDetailScreen({ route, navigation }) {
  const { bodyPartId } = route.params;
  const bodyPart = getDogBodyPartById(bodyPartId);
  const [selectedLayerId, setSelectedLayerId] = useState("bones");

  if (!bodyPart) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Body part not found.</Text>
      </ScreenContainer>
    );
  }

  const selectedLayer =
    bodyPart.layers.find((layer) => layer.id === selectedLayerId) ||
    bodyPart.layers.find((layer) => layer.id === "bones") ||
    bodyPart.layers[0];

  const structures = selectedLayer?.structures || [];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBlock}>
          <Text style={styles.eyebrow}>Selected region</Text>
          <Text style={styles.title}>{bodyPart.name}</Text>
        </View>

        <View style={styles.imageCard}>
          <Image
            source={anatomyImages[bodyPartId] || null}
            style={styles.detailImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>{bodyPart.description}</Text>
        </View>

        <Text style={styles.sectionTitle}>Layer selector</Text>
        <View style={styles.layerList}>
          {layerOptions.map((layer) => {
            const isSelected = selectedLayerId === layer.id;
            const isDisabled = !layer.enabled;

            return (
              <Pressable
                key={layer.id}
                style={[
                  styles.layerButton,
                  isSelected && styles.layerButtonSelected,
                  isDisabled && styles.layerButtonDisabled,
                ]}
                onPress={() => {
                  if (layer.enabled) {
                    setSelectedLayerId(layer.id);
                  }
                }}
                disabled={isDisabled}
              >
                <Text
                  style={[
                    styles.layerName,
                    isDisabled && styles.layerNameDisabled,
                  ]}
                >
                  {layer.name}
                </Text>
                {isDisabled ? (
                  <Text style={styles.comingSoon}>Coming Soon</Text>
                ) : null}
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>Structures</Text>
        <View style={styles.structureList}>
          {structures.map((structure) => (
            <Pressable
              key={structure.id}
              style={styles.structureButton}
              onPress={() =>
                navigation.navigate("StructureDetail", {
                  bodyPartId,
                  layerId: selectedLayer.id,
                  structureId: structure.id,
                })
              }
            >
              <Text style={styles.structureName}>{structure.name}</Text>
              <Text style={styles.structureInfo}>Educational overview</Text>
            </Pressable>
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
    color: "#3F6FD8",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#11233B",
  },
  imageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 12,
    marginBottom: 18,
    shadowColor: "#8BA1C6",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  detailImage: {
    width: "100%",
    height: 220,
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
  layerList: {
    gap: 10,
    marginBottom: 18,
  },
  layerButton: {
    backgroundColor: "#EAF2FF",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D8E6FF",
  },
  layerButtonSelected: {
    backgroundColor: "#DDEBFF",
    borderColor: "#7BA1F1",
  },
  layerButtonDisabled: {
    backgroundColor: "#F3F5F8",
    borderColor: "#E1E7EE",
  },
  layerName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#16314E",
  },
  layerNameDisabled: {
    color: "#9AA9BC",
  },
  comingSoon: {
    fontSize: 12,
    color: "#8597B0",
    marginTop: 4,
  },
  structureList: {
    gap: 10,
  },
  structureButton: {
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
  structureInfo: {
    fontSize: 13,
    color: "#5E728B",
  },
});
