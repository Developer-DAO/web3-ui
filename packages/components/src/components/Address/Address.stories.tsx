import { storiesOf } from '@storybook/react';
import React from 'react';
import { Address } from '.';

import { useWallet } from '@web3-ui/hooks';

storiesOf('Address', module).add('Default', () => <Address />);

const WithWallet = () => {
  useWallet();
  return <Address />;
};

storiesOf('Address', module).add('WithWallet', () => <WithWallet />);
