import React from 'react';
import { VStack } from 'native-base';
import { Header } from '../../components/Header';
import { useRoute } from '@react-navigation/native';

export function Details() {
  const router = useRoute();
  const { orderId } = router.params;

  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Detalhes da Solicitação" />
    </VStack>
  );
}