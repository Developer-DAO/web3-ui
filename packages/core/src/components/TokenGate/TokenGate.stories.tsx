import { Container, Heading } from '@chakra-ui/react';
import { NETWORKS } from '@web3-ui/hooks';
import { ethers } from 'ethers';
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
          network={NETWORKS.mainnet}
          rpcUrl="https://mainnet.infura.io/v3/21bc321f21a54c528dc084f5ed7f8df7"
        >
          <ConnectWallet />
          <Story />
        </Provider>
      );
    }
  ]
};

export const ERC20 = () => {
  return (
    <TokenGate
      tokenContractAddress="0x6B175474E89094C44Da98b954EedeAC495271d0F"
      deniedContent={
        <Container mt={10}>
          <Heading>You don't own enough $DAI</Heading>
        </Container>
      }
      requiredQuantity={+ethers.utils.parseEther('0.1')}
    >
      <Container mt={10}>
        <Heading>
          {' '}
          You are a fellow $DAI holder. Welcome to the club! 🥳
        </Heading>
      </Container>
    </TokenGate>
  );
};

export const ERC721 = () => {
  return (
    <TokenGate
      tokenContractAddress="0x25ed58c027921e14d86380ea2646e3a1b5c55a8b"
      deniedContent={
        <Container mt={10}>
          <Heading>You don't own a Developer DAO genesis NFT.</Heading>
        </Container>
      }
      requiredQuantity={1}
    >
      <Container mt={10}>
        <Heading> You are a fellow D_D member. Welcome to the club! 🥳</Heading>
      </Container>
    </TokenGate>
  );
};
