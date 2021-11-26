import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from '../src/components';

export const decorators = [
  (Story) => (
    <Provider network='rinkeby'>
      <Story />
    </Provider>
  ),
];
