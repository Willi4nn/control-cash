import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/styles/theme";
import Routes from "./src/screens/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
