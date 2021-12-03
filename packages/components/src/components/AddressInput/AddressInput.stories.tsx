import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import { Provider, useWallet } from '@web3-ui/hooks';

storiesOf('AddressInput', module).add('default', () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [value, setValue] = React.useState('');
  return (
    <AddressInput
      borderColor='red.500'
      fontSize='xl'
      value={value}
      onChange={(e) => setValue(e)}
      provider={provider}
    />
  );
});

storiesOf('AddressInput', module).add('using @web3-hook', () => {
  const [value, setValue] = React.useState('');
  const { connectWallet, connection } = useWallet();

  useEffect(() => {
    connectWallet();
  }, []);
  return (
    <Provider>
      <AddressInput value={value} onChange={(e) => setValue(e)} provider={connection.signer} />
    </Provider>
  );
});
