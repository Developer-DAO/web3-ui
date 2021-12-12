import React from 'react';
import { ConnectWallet } from '.';
import { Provider } from '..';

export default {
  component: ConnectWallet,
  title: 'Core/ConnectWallet',
  decorators: [
    (Story) => (
      <Provider network={4}>
        <Story />
      </Provider>
    ),
  ],
};

export const Default = () => <ConnectWallet />;
