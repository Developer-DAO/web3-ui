import React from 'react';
import { TokenBalance } from '.';

export default {
  title: 'Components/TokenBalance',
  component: TokenBalance,
};

const D_D_LOGO =
  'https://pbs.twimg.com/profile_images/1454780880875134976/F9ziONaw_400x400.jpg';

export const Default = () => (
  <TokenBalance
    name="Devs 4 Revolution"
    symbol="$CODE"
    balance={200}
    usdValue={100}
    imgUrl={D_D_LOGO}
  />
);

export const Multiple = () => (
  <>
    <TokenBalance
      name="Devs 4 Revolution"
      symbol="$CODE"
      balance={200}
      usdValue={100}
      imgUrl={D_D_LOGO}
    />
    <TokenBalance
      name="Devs 4 Revolution"
      symbol="$CODE"
      balance={200}
      usdValue={100}
      imgUrl={D_D_LOGO}
    />
  </>
);
