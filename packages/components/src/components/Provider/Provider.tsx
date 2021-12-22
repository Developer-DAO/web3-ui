import React from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

export interface ProviderProps extends ChakraProviderProps {}

export const Provider: React.FC<ProviderProps> = ({ children, ...props }) => {
  return <ChakraProvider {...props}>{children}</ChakraProvider>;
};
