import React, { ReactComponentElement, useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { Web3Context } from '@web3-ui/hooks/src';
import { Provider } from '../Provider';

interface WalletContextTestWrapperProps {
  child: JSX.Element;
}

export const WalletContextTestWrapper = ({ child }: WalletContextTestWrapperProps): JSX.Element => {
  const { connected, connectWallet } = useContext(Web3Context);
  return !connected ? <Button onClick={connectWallet}>Connect with Wallet</Button> : child;
};
