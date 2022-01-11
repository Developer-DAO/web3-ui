import { NETWORKS, Provider, useWallet } from '@web3-ui/hooks';
import React from 'react';
import { TokenBalance, TokenBalanceProps } from './TokenBalance';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Core/TokenBalance',
  component: TokenBalance,
};

const exampleProps: TokenBalanceProps = {
  usdRate: 0.9955,
  accountAddress: '0x503828976D22510aad0201ac7EC88293211D23Da',
  tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
};

export const TokeBalance = () => (
  <Provider network={NETWORKS.mainnet}>
    <WalletContextTestWrapper child={<TokenBalance {...exampleProps} />} />
  </Provider>
);

export const InvalidContract = () => (
  <Provider network={NETWORKS.mainnet}>
    <WalletContextTestWrapper
      child={<TokenBalance {...exampleProps} tokenAddress={'0x0'} />}
    />
  </Provider>
);

const WalletContextTestWrapper = ({ child }): JSX.Element => {
  const { connected, connectWallet } = useWallet();

  return !connected ? (
    <Button onClick={connectWallet}>Connect with Wallet</Button>
  ) : (
    child
  );
};
