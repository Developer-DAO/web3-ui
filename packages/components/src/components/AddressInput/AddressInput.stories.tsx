import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import { Provider, useWallet } from '@web3-ui/hooks';
import { Text } from '@chakra-ui/layout';

storiesOf('AddressInput', module).add('default', () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [value, setValue] = React.useState('');
  return (
    <>
      <AddressInput fontSize='xl' value={value} onChange={(e) => setValue(e)} provider={provider} />
      <Text>value: {value}</Text>
    </>
  );
});

const WithUseWallet = () => {
  const { connectWallet, connection } = useWallet();
  const [value, setValue] = React.useState('');

  useEffect(() => {
    connectWallet!();
  }, []);

  return (
    <>
      <AddressInput value={value} onChange={(e) => setValue(e)} provider={connection.signer!} />
      <Text>value: {value}</Text>
    </>
  );
};
storiesOf('AddressInput', module).add('using @web3-hook', () => {
  return (
    <Provider network='mainnet'>
      <WithUseWallet />
    </Provider>
  );
});
