import { useState } from "react";
import { Flex, Box, View, Icon, Text, Select, ScrollView } from "native-base";
import Logo from "../../components/Logo";
import Price from "../../components/Price";
import { transactions } from "../../data/transactions";
import { Ionicons } from '@expo/vector-icons';

export default function History() {
  const [selectedMonth, setSelectedMonth] = useState("Junho - 2023");
  let previousDate = null;

  // Função para gerar as opções de meses disponíveis
  const generateOptions = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const options = [];
    for (let year = 2022; year <= currentYear; year++) {
      const startMonth = year === 2022 ? 1 : 0;
      const endMonth = year === currentYear ? currentMonth : 12;

      for (let month = startMonth; month < endMonth; month++) {
        options.push(`${months[month]} - ${year}`);
      }
    }
    return options;
  };

  // Gerar as opções de meses disponíveis
  const options = generateOptions();

  // Função para calcular os preços
  const calculatePrices = (filteredTransactions) => {
    let totalIncome = 0;
    let totalExpenses = 0;

    filteredTransactions.forEach((transaction) => {
      if (transaction.value > 0) {
        totalIncome += transaction.value;
      } else {
        totalExpenses -= transaction.value;
      }
    });

    const balance = totalIncome - totalExpenses;

    return {
      totalIncome,
      totalExpenses,
      balance,
    };
  };

  // Filtrar as transações com base no mês selecionado
  const filteredTransactions = selectedMonth !== "Todos"
    ? transactions.filter(transaction => {
      const selectedYear = parseInt(selectedMonth.split(" - ")[1]);
      return transaction.date === selectedMonth.split(" - ")[0] && transaction.year === selectedYear.toString();
    })
    : transactions;


  // Calcular os preços com base nas transações filtradas
  const { totalIncome, totalExpenses, balance } = calculatePrices(filteredTransactions);

  return (
    <Flex flex={1} bg="black">
      <Flex direction="row" my={50} alignItems="center" alignSelf="center">
        <Logo />
        <Text color="white" fontSize={27} fontWeight="bold">
          Histórico de Transações
        </Text>
      </Flex>
      <Flex direction="row" alignItems="center" alignSelf="center">
        <Text color="white" fontSize={18} marginRight={5}>
          Selecione a data
        </Text>
        <Select
          selectedValue={selectedMonth}
          w="50%"
          minWidth={200}
          placeholder="Mês - Ano"
          colorScheme="dark"
          color="white"
          onValueChange={(value) => setSelectedMonth(value)}
          fontSize={18}
        >
          {options.map((option, index) => (
            <Select.Item key={index} label={option} value={option} />
          ))}
        </Select>
      </Flex>
      <Flex alignItems="center">
        <Text color="white" py={5} fontSize={27} fontWeight="bold" alignItems="center">
          {selectedMonth ? selectedMonth.split(" - ")[0] : "Todos"}
        </Text>

        <Flex direction="row" w="100%" justifyContent="space-around" pb={10}>
          <View alignItems="center">
            <Text color="white" fontSize={18}>Entradas</Text>
            <Price value={totalIncome} color="white" fontSize={18} />
          </View>
          <View alignItems="center">
            <Text color="white" fontSize={18}>Saídas</Text>
            <Price value={totalExpenses} color="white" fontSize={18} />
          </View>
          <View alignItems="center">
            <Text color="white" fontSize={18}>Saldo</Text>
            <Price value={balance} color="white" fontSize={18} />
          </View>
        </Flex>
      </Flex>
      <ScrollView mb={20}>
        {filteredTransactions.map((transaction) => {
          const showDate = transaction.date !== previousDate;

          const isPositive = transaction.value > 0;

          return (
            <Flex key={transaction.id} p={5} pb={1}>
              {showDate && (
                <Box pb={4}>
                  <Text fontWeight="bold" fontSize={23} color="gray.500">
                    {transaction.date} {transaction.day}
                  </Text>
                </Box>
              )}
              <Flex direction="row" alignItems="flex-start">
                <Box ml={4} mr={10}>
                  {isPositive ? (
                    <Ionicons name="arrow-up" size={30} color="white" />
                  ) : (
                    <Ionicons name="arrow-down" size={30} color="white" />
                  )}
                </Box>
                <Flex>
                  <Price value={transaction.value} color="white" fontSize={18} />
                  <Text fontSize={18} color="gray.500" mt={1}>
                    {transaction.name}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          )
        })}
      </ScrollView>
    </Flex>
  );
}
