import { Button, Flex, Box, ScrollView } from "native-base";
import { Image } from "react-native";
import MovimentationCard from "../MovimentationCard";

export default function Header({ handlePresentModal }) {
    var titleEnter = "Entradas";
    var valueEnter = "R$ 200.400,00";
    var textEnter = "Última entrada dia 13 de abril";

    var titleExits = "Saídas";
    var valueExits = "- R$ 1.259,00";
    var textExits = "Última saída dia 03 de abril";

    var titleTotal = "Total";
    var valueTotal = "R$ 199.141,00";
    var textTotal = "01 à 16 de abril";

    return (
        <>
            <Box background="#147065" height={270} zIndex={-1} position="absolute" top={0} left={0} right={0} bottom={0} />
            <Flex direction="row" pt={60} justifyContent="space-around">
                <Image
                    style={{ width: 95, height: 47 }}
                    source={require('../../../assets/logo.png')}
                />
                <Button
                    backgroundColor={"rgba(51, 204, 149, 0.50)"}
                    color={"#FFFFFF"}
                    onPress={handlePresentModal}
                >Nova Transação</Button>
            </Flex>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} position="absolute" top={110}>
                <Flex direction="row" justifyContent={'space-between'} paddingTop={10} paddingLeft={25}  >
                    <MovimentationCard iconName={"arrow-up-circle"} iconColor={"#12A454"} title={titleEnter} value={valueEnter} text={textEnter} />
                    <MovimentationCard iconName={"arrow-down-circle"} iconColor={"#D70A0A"} title={titleExits} value={valueExits} text={textExits} />
                    <MovimentationCard iconName={"cash-outline"} iconColor={"#12A454"} title={titleTotal} value={valueTotal} text={textTotal} />
                </Flex>
            </ScrollView>
        </>
    );
}