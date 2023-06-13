import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./src/styles/theme";
import Routes from "./src/screens/routes";
import BottomSheet from "./src/components/BottomSheet";
import { useRef } from "react";

export default function App() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["82%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function handleCloseModal() {
    bottomSheetModalRef.current?.close();
  }
  
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes handlePresentModal={handlePresentModal} />
        <BottomSheet
          bottomSheetModalRef={bottomSheetModalRef}
          snapPoints={snapPoints}
          handleCloseModal={handleCloseModal}
        />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
