import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { NETWORKS, Provider, useWallet } from '..';
import Authereum from 'authereum';
import Portis from '@portis/web3';

export default {
  title: 'Hooks/useWallet',
};
const portisDappId = '512893f6-6436-44c3-b0dc-6caccab984bb';

const DefaultUsingProvider = () => {
  const {
    connection,
    connectWallet,
    disconnectWallet,
    connected,
    correctNetwork,
    switchToCorrectNetwork,
  } = useWallet();

  useEffect(() => {
    if (!correctNetwork) {
      alert('Please connect to Rinkeby.');
    }
  }, [correctNetwork]);

  if (connected) {
    return (
      <div>
        <Button onClick={disconnectWallet}>Disconnect wallet</Button>
        <p>{connection.ens || connection.userAddress}</p>
        <p>Connected to the correct network: {correctNetwork ? 'Yes' : 'no'}</p>
        {!correctNetwork && (
          <Button colorScheme='teal' mt={2} onClick={switchToCorrectNetwork}>
            Switch to correct network
          </Button>
        )}
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
            logo:
              'https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png',
            name: 'Portis',
            description: 'Connect to Portis App',
          },
          package: Portis,
          options: {
            id: portisDappId,
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
            logo:
              'https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png',
            name: 'Portis',
            description: 'Connect to Portis App',
          },
          package: Portis,
          options: {
            id: portisDappId,
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
