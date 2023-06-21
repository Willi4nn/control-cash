import { Box, Flex, Text } from "native-base";

export default function ListCard(props) {
    return (
        <Box background="#333333" width={350} height={128} borderRadius={5}>
            <Flex paddingTop={3} p={6}>
                <Text fontSize={"lg"} color={"#FFFF"}>{props.title}</Text>
                <Flex paddingTop={2}>
                    <Text fontSize={"2xl"} color={"#12A454"}>{props.value}</Text>
                </Flex>
                <Flex direction="row" paddingTop={3} justifyContent="space-between">
                    <Text fontSize={"sm"} color={"#FFFF"}>{props.description}</Text>
                    <Text fontSize={"sm"} color={"#FFFF"}>{props.data} </Text>
                </Flex>
            </Flex>
        </Box>
    );

}
