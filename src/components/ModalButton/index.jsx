import { Button, Text } from "native-base";

export default function ModalButton({ onPress }) {
  return (
    <Button onPress={onPress}>
      <Text>Open Modal</Text>
    </Button>
  );
}
