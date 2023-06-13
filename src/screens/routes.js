import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import History from "./History";

const Tab = createBottomTabNavigator();

export default function Routes({ handlePresentModal }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconMap = {
            Adicionar: focused ? "ios-add-circle" : "ios-add-circle-outline",
            Histórico: focused ? "list" : "list-outline",
            Início: focused ? "home" : "home-outline",
          };

          const iconName = iconMap[route.name];

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { position: "absolute", backgroundColor: "black" },
        tabBarLabelStyle: { display: "none" },
        tabBarActiveTintColor: "#ffffff",
      })}
    >
      <Tab.Screen
        name="Adicionar"
        children={() => <Home handlePresentModal={handlePresentModal} />}
        listeners={{
          tabPress: () => handlePresentModal(),
        }}
      />
      <Tab.Screen name="Início">
        {() => <Home handlePresentModal={handlePresentModal} />}
      </Tab.Screen>
      <Tab.Screen name="Histórico" component={History} />
    </Tab.Navigator>
  );
}
