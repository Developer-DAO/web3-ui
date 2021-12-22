import React from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

export interface ProviderProps {}

export const Provider: React.FC<ProviderProps & ChakraProviderProps> = ({ children, ...props }) => {
  return <ChakraProvider {...props}>{children}</ChakraProvider>;
};
