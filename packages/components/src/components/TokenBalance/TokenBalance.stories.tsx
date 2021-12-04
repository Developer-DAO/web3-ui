import { storiesOf } from '@storybook/react';
import { Provider } from '@web3-ui/hooks';
import React from 'react';
import { TokenBalance, TokenBalanceProps } from './TokenBalance';
import { WalletContextTestWrapper } from './WalletContextTestWrapper';

const exampleProps: TokenBalanceProps = {
  value: 0.9955,
  name: 'Dai Stablecoin',
  symbol: 'Dai',
  owner: '0x503828976D22510aad0201ac7EC88293211D23Da',
  address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
};

storiesOf('TokenBalance', module).add('Renders the balance of a certain token', () => (
  <Provider network='mainnet'>
    <WalletContextTestWrapper child={<TokenBalance {...exampleProps} />} />
  </Provider>
));
