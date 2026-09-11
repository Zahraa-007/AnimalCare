import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import ScreenContainer from "../components/ScreenContainer";

const hotspotConfig = {
  frontLeg: { x: 0.3, y: 0.57, width: 0.15, height: 0.19 },
  hindLeg: { x: 0.55, y: 0.6, width: 0.15, height: 0.19 },
};

export default function AnatomyScreen({ navigation }) {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const handlePress = (regionId) => {
    setSelectedHotspot(regionId);
    navigation.navigate("BodyPartDetail", { bodyPartId: regionId });
  };

  return (
    <ScreenContainer>
      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>AnimalCare</Text>
        <Text style={styles.title}>Dog Anatomy</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/anatomy/dog.jpg")}
          style={styles.dogImage}
          resizeMode="contain"
        />

        {Object.entries(hotspotConfig).map(([key, value]) => {
          const isSelected = selectedHotspot === key;

          return (
            <Pressable
              key={key}
              onPress={() => handlePress(key)}
              onPressIn={() => setSelectedHotspot(key)}
              onPressOut={() => setSelectedHotspot(null)}
              style={[
                styles.hotspot,
                {
                  left: `${value.x * 100}%`,
                  top: `${value.y * 100}%`,
                  width: `${value.width * 100}%`,
                  height: `${value.height * 100}%`,
                },
                isSelected && styles.hotspotSelected,
              ]}
              accessibilityLabel={key === "frontLeg" ? "Front Leg" : "Hind Leg"}
            />
          );
        })}
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
    letterSpacing: 1.2,
    color: "#3F6FD8",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#11233B",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    minHeight: 360,
    backgroundColor: "#F3F8FF",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#DCE9FF",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  dogImage: {
    width: "100%",
    height: 420,
  },
  hotspot: {
    position: "absolute",
    borderRadius: 18,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  hotspotSelected: {
    borderWidth: 2,
    borderColor: "#3F6FD8",
    backgroundColor: "rgba(63, 111, 216, 0.12)",
  },
});
