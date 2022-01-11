import { NETWORKS } from '@web3-ui/hooks';
import React from 'react';
import { ConnectWallet } from '.';
import { Provider } from '..';

export default {
  component: ConnectWallet,
  title: 'Core/ConnectWallet',
  decorators: [
    (Story) => (
      <Provider network={NETWORKS.rinkeby}>
        <Story />
      </Provider>
    ),
  ],
};

export const Default = () => <ConnectWallet />;
