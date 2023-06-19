import { ArrowUpIcon, Box, CircleIcon, Flex, Spacer, Text } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function MovimentationCard(props) {
  return (
    <Box background="#22142b" width={300} height={200} borderRadius={5} marginLeft={4}>
      <Flex paddingTop={18.81} paddingLeft={23}>
        <Flex direction="row">
          <Text fontSize={"md"} height={20.59} color={"#FFFF"}>{props.title}</Text>
          <Spacer />
          <Flex flex={1} alignItems={'center'} marginLeft={130}>
            <Icon name={props.iconName} size={30} color={props.iconColor} />
          </Flex>
        </Flex>
        <Flex paddingTop={62.19}>
          <Text fontSize={"2xl"} color={"#FFFF"}>{props.value}</Text>
          <Text color={"#969CB2"}>{props.text}</Text>
        </Flex>
      </Flex>
    </Box>
  );

}
