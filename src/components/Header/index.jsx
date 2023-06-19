import { Button, NativeBaseProvider, Flex, Spacer, Box, ScrollView } from "native-base";
import { Image } from "react-native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
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

    return(
    <Box background="#147065" height={375}>
    <Flex direction="row" paddingTop={20}>
        <Image 
            style={{width: 136, height: 36, marginLeft: 24}}
            source={require('../../../assets/logo.png')}
        />
        <Spacer />
        <Button marginRight={30} backgroundColor={"#33CC95"} color={"#FFFFFF"} onPress={handlePresentModal}>Nova Transação</Button>
    </Flex>
    <ScrollView horizontal>
        <Flex direction="row" justifyContent={'space-between'} paddingTop={10} paddingLeft={25}>
            <MovimentationCard iconName={"arrow-up-circle"} iconColor={"#12A454"} title={titleEnter} value={valueEnter} text={textEnter}/>
            <MovimentationCard iconName={"arrow-down-circle"} iconColor={"#D70A0A"} title={titleExits} value={valueExits} text={textExits}/>
            <MovimentationCard iconName={"cash-outline"} iconColor={"#12A454"} title={titleTotal} value={valueTotal} text={textTotal}/>
        </Flex>
    </ScrollView>
    </Box>
    );
}