import { View, Button, Text } from "native-base";

export default function Home({ handlePresentModal }) {

  return (
    <View flex={1} bg="black" alignItems="center" justifyContent="center">
      <Button onPress={handlePresentModal} bg="green.700">
        <Text>Nova Transação</Text>
      </Button>
    </View>
  );
}
