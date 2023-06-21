import { Box, Flex } from "native-base";
import Header from "../../components/Header";
import ListEntries from "../../components/ListEntries";

export default function Home({ handlePresentModal }) {

  return (
    <>
      <Header handlePresentModal={handlePresentModal} />
      <Box flex={1} bg="black" marginTop={142} zIndex={-1}>
        <Flex paddingTop={35} mx={5} mt={90}>
          <ListEntries />
        </Flex>
      </Box >
    </>
  );
}
