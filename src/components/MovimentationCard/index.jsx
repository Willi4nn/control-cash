import { Box, Flex, Spacer, Text } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function MovimentationCard(props) {
  return (
    <Box background="#333333" width={300} height={200} borderRadius={10} mx={2}>
      <Flex paddingTop={18.81} p={23}>
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Text fontSize={"lg"} color={"#FFFF"}>{props.title}</Text>
          <Flex >
            <Icon name={props.iconName} size={40} color={props.iconColor} />
          </Flex>
        </Flex>
        <Flex paddingTop={50}>
          <Text fontSize={"3xl"} color={"#FFFF"}>{props.value}</Text>
          <Text color={"#969CB2"}>{props.text}</Text>
        </Flex>
      </Flex>
    </Box>
  );

}
