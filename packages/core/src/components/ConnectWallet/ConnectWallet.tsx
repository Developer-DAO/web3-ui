import { Button } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/hooks';
import React from 'react';

export const ConnectWallet = () => {
  const {
    connectWallet,
    connection,
    connected,
    disconnectWallet
  } = useWallet();

  return (
    <>
      <Button onClick={connected ? disconnectWallet : connectWallet}>
        {connected
          ? connection.ens || connection.userAddress
          : 'Connect wallet'}
      </Button>
    </>
  );
};
