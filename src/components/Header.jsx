import React from "react";
import { HStack, Heading, IconButton, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";

// Icons
import { CaretLeft } from "phosphor-react-native";

export function Header({ title, ...rest }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HStack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton icon={<CaretLeft color={colors.gray[200]} size={24} />} onPress={handleGoBack}/>

      <Heading color="gray.100" textAlign="center" fontSize="lg" flex={1} ml={-6}>
        {title}
      </Heading>
    </HStack>
  );
}
