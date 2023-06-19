import { View, Button, Text, Icon, Box, Flex } from "native-base";
import Header from "../../components/Header";
import ListEntries from "../../components/ListEntries";

export default function Home({ handlePresentModal }) {

  return (
    <>
      <Header handlePresentModal={handlePresentModal}/>
      <Box flex={1} bg="black">
        <Flex paddingTop={35} paddingLeft={34}>
          <ListEntries />
        </Flex>
      </Box >
    </>
  );
}
