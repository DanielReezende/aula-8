import React, { useState } from "react";
import {
  VStack,
  HStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

// Assets
import Logo from "../../assets/logo_secondary.svg";

// Icons
import { ChatTeardropText, SignOut } from "phosphor-react-native";

// Components
import { Filter } from "../../components/Filter";
import { Order } from "../../components/Order";
import { Button } from "../../components/Button";



export function Home() {
  const [statusSelected, setStatusSelected] = useState("open");
  const [orders, setOrders] = useState([
    {
      id: '1',
      patrimony: 'PC Gamer 157',
      when: '20/01/22 às 14h',
      status: 'open',
    }
  ]);
  const navigation = useNavigation();


  const { colors } = useTheme();

  function handleNewOrder() {
    navigation.navigate("register");
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orders}
          ListHeaderComponent={() => (
            <>
              <HStack
                w="full"
                mt={8}
                mb={4}
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading color="gray.100">Meus Chamados</Heading>
                <Text color="gray.200">3</Text>
              </HStack>

              <HStack space={3} mb={8}>
                <Filter
                  title="em andamento"
                  type="open"
                  onPress={() => setStatusSelected("open")}
                  isActive={statusSelected === "open"}
                />
                <Filter
                  title="finalizados"
                  type="closed"
                  onPress={() => setStatusSelected("closed")}
                  isActive={statusSelected === "closed"}
                />
              </HStack>
            </>
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          contentContainerStyle={{ paddingBottom: 25 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" textAlign="center" mt={6}>
                Você ainda não possui {"\n"} solicitações{" "}
                {statusSelected === "open" ? "em andamento" : "finalizadas"}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
