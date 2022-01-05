import { Container, Heading } from '@chakra-ui/react';
import { NETWORKS } from '@web3-ui/hooks';
import React from 'react';
import { ConnectWallet, Provider } from '..';
import { TokenGate } from './TokenGate';

export default {
  component: TokenGate,
  title: 'Core/TokenGate',
  decorators: [
    Story => {
      return (
        <Provider
          network={NETWORKS.rinkeby}
          rpcUrl="https://rinkeby.infura.io/v3/21bc321f21a54c528dc084f5ed7f8df7"
        >
          <ConnectWallet />
          <Story />
        </Provider>
      );
    }
  ]
};

export const Default = () => {
  return (
    <TokenGate
      tokenContractAddress="0x08149745590e9025b52b6801e9dd3E752e60F3A2"
      deniedContent={
        <Container mt={10}>
          <Heading>You don't own enough $dUSDT</Heading>
        </Container>
      }
    >
      <Container mt={10}>
        <Heading>
          {' '}
          You are a fellow $dUSDT holder. Welcome to the club! 🥳
        </Heading>
      </Container>
    </TokenGate>
  );
};
