import { useRef } from "react";
import { View, Button, Text } from "native-base";
import BottomSheet from "../../components/BottomSheet";

export default function Home() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["60%", "90%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  function handleCloseModal() {
    bottomSheetModalRef.current?.close();
  }

  return (
    <View flex={1} bg="black" alignItems="center" justifyContent="center">
      <Button onPress={handlePresentModal} bg="green.700">
        <Text>Nova Transação</Text>
      </Button>
      <BottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleCloseModal={handleCloseModal}
      />
    </View>
  );
}
