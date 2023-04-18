import { View, Button, Text } from "native-base";

export default function Home({ handlePresentModal }) {
  return (
    <View flex={1} bg="black.500" alignItems="center" justifyContent="center">
      <Button onPress={handlePresentModal} bg="blue.700">
        <Text>Nova Transação</Text>
      </Button>
    </View>
  );
}
