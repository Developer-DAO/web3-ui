import { Button } from '@chakra-ui/react';
import React from 'react';
import { useWallet, Provider } from '@web3-ui/hooks';
import { ethers } from 'ethers';

export interface SigninProps {
  data: string;
}

export const Signin: React.FC<SigninProps> = (props) => {
  const { connected, connectWallet } = useWallet();

  async function handleSignIn() {
    if (!connected) connectWallet;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    signer.signMessage(props.data);
  }

  return (
    <Provider network='rinkeby'>
      <Button data={props.data} onClick={handleSignIn}>
        Sign-in With Ethereum
      </Button>
    </Provider>
  );
};
