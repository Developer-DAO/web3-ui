import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';

storiesOf('AddressInput', module).add('default', () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [value, setValue] = React.useState('');
  return <AddressInput value={value} setValue={setValue} provider={provider} />;
});
