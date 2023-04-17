import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, Box } from "native-base";
import TabNavigation from "./src/components/TabNavigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="black" alignItems="center" justifyContent="center">
        <TabNavigation />
      </Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
