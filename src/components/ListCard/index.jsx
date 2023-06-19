import { ArrowUpIcon, Box, CircleIcon, Flex, Spacer, Text } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListCard(props) {
    return(
    <Box background="#333333" width={350} height={128} borderRadius={5}>
        <Flex paddingTop={3} paddingLeft={6}>
        <Text fontSize={"md"} height={20.59} color={"#FFFF"}>{props.title}</Text>
        <Flex paddingTop={2}>
            <Text fontSize={"2xl"} color={"#12A454"}>{props.value}</Text>
        </Flex>
        <Flex direction="row" paddingTop={3}>
            <Text fontSize={"sm"} color={"#FFFF"}>{props.description}</Text>
            <Text marginLeft={40} fontSize={"sm"} color={"#FFFF"}>{props.data} </Text>
        </Flex>
        </Flex>
    </Box>
    );
    
}
