import React from "react";
import { Box, Circle, Pressable, HStack, Text, VStack, useTheme } from "native-base";
import { CircleWavyCheck, ClockAfternoon, Hourglass } from "phosphor-react-native";

export function Order({ data, ...rest }) {
  const { colors } = useTheme();

  const statusColor =
    data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        w="full"
        bg="gray.600"
        mb={4}
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white">Patrimônio {data?.patrimony}</Text>

          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.when}
            </Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {data.status === "open" ? (
            <Hourglass size={24} color={statusColor} />
          ) : (
            <CircleWavyCheck size={24} color={statusColor} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
}
