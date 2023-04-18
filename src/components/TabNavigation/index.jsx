import { useState } from "react";
import { Box, Center, HStack, Icon, Pressable, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabNavigation() {
  const [selected, setSelected] = useState(0);

  const tabItems = [
    {
      icon: "plus-circle-outline",
      selectedIcon: "plus-circle",
      label: "Adicionar",
    },
    { icon: "home-outline", selectedIcon: "home", label: "Início" },
    { icon: "magnify", selectedIcon: "magnify", label: "Histórico" },
  ];

  const handleTabPress = (index) => {
    setSelected(index);
  };

  return (
    <Box
      flex={1}
      bg="black.500"
      width="100%"
      position="absolute"
      bottom={0}
      borderTopWidth="1px"
      borderColor="gray.200"
    >
      <HStack bg="black" alignItems="center" safeAreaBottom shadow={6}>
        {tabItems.map((tab, index) => (
          <Pressable
            key={index}
            cursor="pointer"
            opacity={selected === index ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => handleTabPress(index)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === index ? tab.selectedIcon : tab.icon}
                  />
                }
                color="white"
                size="2xl"
              />
              {selected === index && (
                <Text color="white" fontSize="12">
                  {tab.label}
                </Text>
              )}
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
}
