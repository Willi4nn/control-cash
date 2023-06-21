import { Flex, ScrollView, Text } from "native-base"
import ListCard from '../../components/ListCard/index';

export default function ListEntries(props) {
    return (
        <>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <Text color={"#FFFF"} fontSize={"xl"}>Listagem</Text>
                <Flex pt={5} pb={20} alignContent='center'>
                    <Flex>
                        <ListCard title={"Desenvolvimento de Site"} value={"R$ 12.000,00"} description={"Vendas"} data={"13/04/2021"}/>
                    </Flex>
                    <Flex paddingTop={3}>
                        <ListCard title={"Desenvolvimento de Site"} value={"R$ 12.000,00"} description={"Vendas"} data={"13/04/2021"} />
                    </Flex>
                    <Flex paddingTop={3}>
                        <ListCard title={"Desenvolvimento de Site"} value={"R$ 12.000,00"} description={"Vendas"} data={"13/04/2021"} />
                    </Flex>
                    <Flex paddingTop={3}>
                        <ListCard title={"Desenvolvimento de Site"} value={"R$ 12.000,00"} description={"Vendas"} data={"13/04/2021"} />
                    </Flex>
                    <Flex paddingTop={3}>
                        <ListCard title={"Desenvolvimento de Site"} value={"R$ 12.000,00"} description={"Vendas"} data={"13/04/2021"} />
                    </Flex>
                </Flex>
            </ScrollView>
        </>
    );
}