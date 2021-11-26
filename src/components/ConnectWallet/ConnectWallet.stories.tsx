import { storiesOf } from '@storybook/react';
import React from 'react';
import { ConnectWallet } from '.';

storiesOf('ConnectWallet', module)
  .add('Default', () => <ConnectWallet />)
  .add('Without address', () => <ConnectWallet showAddress={false} />)
  .add('Custom styling', () => (
    <ConnectWallet borderRadius={10} backgroundColor='black' textColor='white' />
  ));
