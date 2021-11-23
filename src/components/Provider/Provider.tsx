import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export interface ProviderProps {}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
