import {
  View,
  Stack,
  Heading,
  Input,
  Button,
  Text
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
        <View paddingX={8}>
          <Stack space={3}>
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
              fontSize={18}
            />
            <Input
              style={{
                backgroundColor: "#222222",
                color: "white",
              }}
              variant="unstyled"
              placeholder="Preço"
              fontSize={18}
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
                <Text fontSize={18} color="white">Entrada</Text>
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
                <Text fontSize={18} color="white">Saída</Text>
              </Button>
            </Stack>
            <Input
              style={{
                backgroundColor: "#222222",
                color: "white",
              }}
              variant="unstyled"
              placeholder="Categoria"
              fontSize={18}
            />
            <Input
              style={{
                backgroundColor: "#222222",
                color: "white",
              }}
              variant="unstyled"
              placeholder="Data"
              fontSize={18}
            />
            <Button bg="green.700" fontSize={18}>
              <Text fontSize={18} color="white">Cadastrar</Text>
            </Button>
          </Stack>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
