import React from 'react';
import { NetworkSwitch } from '.';
import { NETWORKS } from '@web3-ui/core';

const { mainnet, rinkeby, ropsten, polygon } = NETWORKS;

const networks = [mainnet, rinkeby, ropsten, polygon];

export default {
  title: 'Core/NetworkSwitch',
  component: NetworkSwitch,
};

export const Default = () => {
  return <NetworkSwitch networks={networks} />;
};
