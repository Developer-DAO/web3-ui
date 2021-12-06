import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import { Provider, useWallet } from '@web3-ui/hooks';
import { Text } from '@chakra-ui/layout';

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

storiesOf('AddressInput', module)
  .add('Default', () => {
    return <Component />;
  })
  .add('Using @web3-hook', () => {
    return (
      <Provider network='mainnet'>
        <WithUseWallet />
      </Provider>
    );
  })
  .add('With label', () => {
    return <Component label='Address' />;
  });
