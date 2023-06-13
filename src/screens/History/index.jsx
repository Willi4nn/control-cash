import { useState } from "react";
import { Flex, Box, View, Icon, Text, Select, ScrollView } from "native-base";
import Logo from "../../components/Logo";
import Price from "../../components/Price";

export default function History() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  let previousDate = null;

  const transactions = [
    {
      id: 1,
      date: "Dezembro",
      value: 50,
      name: "aaaa",
    },
    {
      id: 2,
      date: "25 Dez",
      value: 30,
      name: "aaaa",
    },
    {
      id: 3,
      date: "24 Dez",
      value: -20,
      name: "aaaa",
    },
    {
      id: 4,
      date: "24 Dez",
      value: -20,
      name: "aaaa",
    },
    {
      id: 5,
      date: "24 Dez",
      value: -20,
      name: "aaaa",
    },
    {
      id: 6,
      date: "24 Dez",
      value: -20,
      name: "aaaa",
    },
  ];

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

  const options = generateOptions();

  const calculatePrices = (filteredTransactions) => {
    let totalIncome = 0;
    let totalExpenses = 0;

    filteredTransactions.forEach((transaction) => {
      if (transaction.value > 0) {
        totalIncome += transaction.value;
      } else {
        totalExpenses += transaction.value;
      }
    });

    const balance = totalIncome + totalExpenses;

    return {
      totalIncome,
      totalExpenses,
      balance,
    };
  };

  const filteredTransactions = selectedMonth && selectedMonth !== "Todos"
    ? transactions.filter(transaction => transaction.date.includes(selectedMonth.split(" - ")[0]))
    : transactions;

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
      <ScrollView mb={15}>
        {filteredTransactions.map((transaction) => {
          const showDate = transaction.date !== previousDate;
          previousDate = transaction.date;

          return (
            <Flex
              key={transaction.id}
              p={5}
              pb={1}
            >
              {showDate && (
                <Text fontWeight="bold" fontSize={23} color="gray.500">
                  {transaction.date}
                </Text>
              )}
              <Flex
                direction="row"
                alignItems="center"
              >
                <Box ml={4} mr={2}>
                  <Text fontWeight="bold" fontSize={23} color="gray.500">
                    V
                  </Text>
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
