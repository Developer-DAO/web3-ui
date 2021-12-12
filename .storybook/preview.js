import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  controls: { expanded: true },
  viewMode: 'docs',
};
