import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AnatomyScreen from "../screens/AnatomyScreen";
import AnatomyDetailScreen from "../screens/AnatomyDetailScreen";
import AnatomyLayerScreen from "../screens/AnatomyLayerScreen";
import StructureDetailScreen from "../screens/StructureDetailScreen";
import DiseasesScreen from "../screens/DiseasesScreen";
import InjuriesScreen from "../screens/InjuriesScreen";
import AIAssistantScreen from "../screens/AIAssistantScreen";

const Tab = createBottomTabNavigator();
const AnatomyStack = createNativeStackNavigator();

function AnatomyStackNavigator() {
  return (
    <AnatomyStack.Navigator screenOptions={{ headerShown: false }}>
      <AnatomyStack.Screen name="AnatomyHome" component={AnatomyScreen} />
      <AnatomyStack.Screen
        name="BodyPartDetail"
        component={AnatomyDetailScreen}
      />
      <AnatomyStack.Screen name="LayerDetail" component={AnatomyLayerScreen} />
      <AnatomyStack.Screen
        name="StructureDetail"
        component={StructureDetailScreen}
      />
    </AnatomyStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#3F6FD8",
        tabBarInactiveTintColor: "#8EA0B8",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          height: 72,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: "#8BA1C6",
          shadowOpacity: 0.12,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: -4 },
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Anatomy") {
            iconName = "paw-outline";
          } else if (route.name === "Diseases") {
            iconName = "medical-outline";
          } else if (route.name === "Injuries") {
            iconName = "bandage-outline";
          } else if (route.name === "AI Assistant") {
            iconName = "sparkles-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Anatomy" component={AnatomyStackNavigator} />
      <Tab.Screen name="Diseases" component={DiseasesScreen} />
      <Tab.Screen name="Injuries" component={InjuriesScreen} />
      <Tab.Screen name="AI Assistant" component={AIAssistantScreen} />
    </Tab.Navigator>
  );
}
