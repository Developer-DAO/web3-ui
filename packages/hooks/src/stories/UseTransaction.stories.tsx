import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { NETWORKS, Provider, useWallet } from '..';
import { useTransaction } from '../hooks';

export default {
  title: 'Hooks/useTransaction',
};

export const Default = () => {
  const giveAlert = (name, greeting) => {
    alert('Hello ' + name + '! ' + greeting);
  };

  const { execute, loading, error } = useTransaction(giveAlert, ['Nazeeh', 'Good morning']);

  return (
    <div>
      <Button onClick={execute}>Execute</Button>
      <Text>Loading: {loading ? 'true' : 'false'}</Text>
      <Text>Error: {error ? error : 'No error'}</Text>
    </div>
  );
};

const UsingProvider = () => {
  const { connectWallet, connected, disconnectWallet } = useWallet();

  const { execute, loading, error } = useTransaction(connectWallet);
  const {
    execute: executeDisconnectWallet,
    loading: disconnectWalletLoading,
    error: disconnectWalletError,
  } = useTransaction(disconnectWallet);

  if (connected) {
    return (
      <div>
        <Button onClick={executeDisconnectWallet}>Disconnect Wallet</Button>
        <Text>Loading: {disconnectWalletLoading.toString()}</Text>
        <Text color={disconnectWalletError ? 'red' : 'black'}>
          Error: {disconnectWalletError ? disconnectWalletError : 'No error'}
        </Text>
      </div>
    );
  }

  return (
    <div>
      <Button onClick={execute}>Connect Wallet</Button>
      <Text>Loading: {loading.toString()}</Text>
      <Text color={error ? 'red' : 'black'}>Error: {error ? error : 'No error'}</Text>
    </div>
  );
};

export const ConnectWallet = () => (
  <Provider network={NETWORKS.mainnet}>
    <UsingProvider />
  </Provider>
);
