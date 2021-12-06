import React from 'react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import { NETWORKS, Provider, useWallet } from '@web3-ui/hooks';
import { Text } from '@chakra-ui/layout';

export default {
  title: 'Components/AddressInput',
  component: AddressInput,
};

const WithUseWallet = () => {
  const { provider } = useWallet();
  const [value, setValue] = React.useState('');

  return (
    <>
      <AddressInput value={value} onChange={(e) => setValue(e)} provider={provider!} />
      <Text>value: {value}</Text>
    </>
  );
};

const Component = ({ ...props }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [value, setValue] = React.useState('');
  return (
    <>
      <AddressInput
        value={value}
        onChange={(e) => setValue(e)}
        provider={provider}
        placeholder='Enter input address'
        {...props}
      />
      <Text>value: {value}</Text>
    </>
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
