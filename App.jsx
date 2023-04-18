import { useRef } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import TabNavigation from "./src/components/TabNavigation";
import Home from "./src/screens/Home";
import theme from "./src/styles/theme";
import BottomSheet from "./src/components/BottomSheet";

export default function App() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["60%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function handleCloseModal() {
    bottomSheetModalRef.current?.close();
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Home handlePresentModal={handlePresentModal} />
      <TabNavigation />
      <BottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleCloseModal={handleCloseModal}
      />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
