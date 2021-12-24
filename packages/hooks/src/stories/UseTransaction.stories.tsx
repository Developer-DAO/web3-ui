import {
  Button,
  Text,
  VStack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';
import React from 'react';
import { NETWORKS, Provider, useWallet, useContract } from '..';
import { useTransaction } from '../hooks';

export default {
  title: 'Hooks/useTransaction'
};

const ADDRESS = '0x7e1D33FcF1C6b6fd301e0B7305dD40E543CF7135'; // Rinkeby
const ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'greet',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string'
      }
    ],
    name: 'setGreeting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address'
      }
    ],
    name: 'transferTo',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
];

const UsingUseContract = () => {
  const { connectWallet, disconnectWallet, connected } = useWallet();
  const contract = useContract(ADDRESS, ABI);
  const [value, setValue] = React.useState('');

  const greet = async () => {
    // @ts-expect-error
    const greeting = await contract.greet();
    alert(greeting);
  };

  // @ts-expect-error
  const [setGreeting, loading, error] = useTransaction(contract.setGreeting, [
    value
  ]);

  if (connected) {
    return (
      <VStack>
        <Button onClick={greet}>Greet</Button>
        <Button onClick={disconnectWallet}>Disconnect Wallet</Button>
        <FormControl isInvalid={!!error}>
          <VStack>
            <FormLabel htmlFor="setGreeting">Set greeting</FormLabel>
            <Input
              id="setGreeting"
              isDisabled={loading}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <Button type="submit" isLoading={loading} onClick={setGreeting}>
              Set Greeting
            </Button>
            <FormErrorMessage>{error && error.message}</FormErrorMessage>
          </VStack>
        </FormControl>
      </VStack>
    );
  }

  return (
    <>
      <Button onClick={connectWallet}>Connect Wallet</Button>
    </>
  );
};

export const WithUseContract = () => {
  return (
    <Provider network={NETWORKS.rinkeby}>
      <UsingUseContract />
    </Provider>
  );
};

const UsingProvider = () => {
  const { connectWallet, connected, disconnectWallet } = useWallet();

  const [execute, loading, error] = useTransaction(connectWallet);
  const [
    executeDisconnectWallet,
    disconnectWalletLoading,
    disconnectWalletError
  ] = useTransaction(disconnectWallet);

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
      <Text color={error ? 'red' : 'black'}>
        Error: {error ? error : 'No error'}
      </Text>
    </div>
  );
};

export const ConnectWallet = () => (
  <Provider network={NETWORKS.mainnet}>
    <UsingProvider />
  </Provider>
);
