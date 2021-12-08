import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { NETWORKS, Provider, useWallet } from '..';
import Authereum from 'authereum';
import Portis from '@portis/web3';

export default {
  title: 'Hooks/useWallet',
};

const DefaultUsingProvider = () => {
  const { connection, connectWallet, disconnectWallet, connected, correctNetwork } = useWallet();

  useEffect(() => {
    if (!correctNetwork) {
      alert('Please connect to the correct network');
    }
  }, [correctNetwork]);

  if (connected) {
    return (
      <div>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <p>{connection.ens || connection.userAddress}</p>
        <p>Connected to the correct network: {correctNetwork ? 'Yes' : 'no'}</p>
      </div>
    );
  }

  return <Button onClick={connectWallet}>Connect Wallet</Button>;
};

export const Default = () => (
  <Provider network={NETWORKS.rinkeby}>
    <DefaultUsingProvider />
  </Provider>
);

export const WithAuthereumProvider = () => (
  <Provider
    network={NETWORKS.rinkeby}
    extraWalletProviders={[
      {
        authereum: {
          package: Authereum,
        },
      },
    ]}
  >
    <DefaultUsingProvider />
  </Provider>
);

export const WithPortisProvider = () => (
  <Provider
    network={NETWORKS.rinkeby}
    extraWalletProviders={[
      {
        portis: {
          display: {
            logo: 'https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png',
            name: 'Portis',
            description: 'Connect to Portis App',
          },
          package: Portis,
          options: {
            id: '6255fb2b-58c8-433b-a2c9-62098c05ddc9',
          },
        },
      },
    ]}
  >
    <DefaultUsingProvider />
  </Provider>
);

export const PortisAuthereumProvider = () => (
  <Provider
    network={NETWORKS.rinkeby}
    extraWalletProviders={[
      {
        portis: {
          display: {
            logo: 'https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png',
            name: 'Portis',
            description: 'Connect to Portis App',
          },
          package: Portis,
          options: {
            id: '6255fb2b-58c8-433b-a2c9-62098c05ddc9',
          },
        },

        authereum: {
          package: Authereum,
        },
      },
    ]}
  >
    <DefaultUsingProvider />
  </Provider>
);
