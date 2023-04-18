import React from "react";
import {
  View,
  Stack,
  Heading,
  Input,
  Button,
  KeyboardAvoidingView,
} from "native-base";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

export default function BottomSheet({
  handleCloseModal,
  bottomSheetModalRef,
  snapPoints,
}) {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 50, backgroundColor: "#333333" }}
        enablePanGesture={true}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View paddingX={8}>
            <Stack space={5}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Heading color="white">Cadastrar transação</Heading>
                <Button
                  style={{ backgroundColor: "transparent" }}
                  activeOpacity={1}
                  onPress={handleCloseModal}
                >
                  <Icon name="close" size={24} color="white" />
                </Button>
              </View>
              <Input style={{ backgroundColor: "white" }} variant="unstyled">
                Nome
              </Input>
              <Input style={{ backgroundColor: "white" }} variant="unstyled">
                Preço
              </Input>
              <Stack space={4} direction="row" justifyContent="space-between">
                <Button
                  leftIcon={
                    <Icon
                      as={Ionicons}
                      name="arrow-up-circle-outline"
                      color="green"
                      size={25}
                    />
                  }
                  flex={1}
                  height={50}
                  bg="gray.100"
                >
                  Entrada
                </Button>
                <Button
                  leftIcon={
                    <Icon
                      as={Ionicons}
                      name="arrow-down-circle-outline"
                      color="red"
                      size={25}
                    />
                  }
                  flex={1}
                  height={50}
                  bg="gray.100"
                >
                  Saída
                </Button>
              </Stack>
              <Input style={{ backgroundColor: "white" }} variant="unstyled">
                Categoria
              </Input>
              <Input style={{ backgroundColor: "white" }} variant="unstyled">
                Data
              </Input>
              <Button bg="green.700">Cadastrar</Button>
            </Stack>
          </View>
        </KeyboardAvoidingView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
