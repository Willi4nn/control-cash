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
        backgroundStyle={{ borderRadius: 50, backgroundColor: "#1a1a1a" }}
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
              <Input
                style={{
                  backgroundColor: "#222222",
                  color: "white",
                }}
                variant="unstyled"
                placeholder="Nome"
              />
              <Input
                style={{
                  backgroundColor: "#222222",
                  color: "white",
                }}
                variant="unstyled"
                placeholder="Preço"
              />
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
                  bg="#222222"
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
                  bg="#222222"
                >
                  Saída
                </Button>
              </Stack>
              <Input
                style={{
                  backgroundColor: "#222222",
                  color: "white",
                }}
                variant="unstyled"
                placeholder="Categoria"
              />
              <Input
                style={{
                  backgroundColor: "#222222",
                  color: "white",
                }}
                variant="unstyled"
                placeholder="Data"
              />
              <Button bg="green.700">Cadastrar</Button>
            </Stack>
          </View>
        </KeyboardAvoidingView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
