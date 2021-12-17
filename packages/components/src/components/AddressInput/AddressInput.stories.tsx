import React from 'react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import { NETWORKS, Provider, useWallet } from '@web3-ui/hooks';
import { Text, VStack } from '@chakra-ui/react';

export default {
  title: 'Components/AddressInput',
  component: AddressInput,
  parameters: {
    // TODO: Fix window.ethereum is undefined breaking chromatic
    chromatic: { disableSnapshot: true },
  },
};

const WithUseWallet = () => {
  const { provider } = useWallet();
  const [value, setValue] = React.useState('');

  return (
    <VStack>
      <AddressInput value={value} onChange={e => setValue(e)} provider={provider!} />
      <Text>Value: {value}</Text>
      <Text fontSize='sm'>
        You need to be connected to the Ethereum mainnet for ENS to work right now. We are working
        on adding better support for ENS.
      </Text>
    </VStack>
  );
};

const Component = ({ ...props }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [value, setValue] = React.useState('');
  return (
    <VStack>
      <AddressInput
        value={value}
        onChange={e => setValue(e)}
        provider={provider}
        placeholder='Enter input address'
        {...props}
      />
      <Text>Value: {value}</Text>
      <Text fontSize='sm'>
        You need to be connected to the Ethereum mainnet for ENS to work right now. We are working
        on adding better support for ENS.
      </Text>
    </VStack>
  );
};

export const Default = () => <Component />;
export const UsingWeb3Hooks = () => {
  return (
    <Provider network={NETWORKS.mainnet}>
      <WithUseWallet />
    </Provider>
  );
};
export const Label = () => <Component label='Address' />;
