import React from 'react';
import { TokenBalance, TokenBalanceProps } from './TokenBalance';

export default {
  title: 'Components/TokenBalance',
  component: TokenBalance,
};

const exampleProps: TokenBalanceProps = {
  name: 'Dai Stablecoin',
  symbol: 'Dai',
  balance: 1234,
  value: 1234 * 0.984,
  imgUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
};

export const TokeBalance = () => <TokenBalance {...exampleProps} />;
