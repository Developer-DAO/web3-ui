import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
