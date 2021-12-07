import React from 'react';
import { render } from '@testing-library/react';
import { ConnectWallet } from '.';
import { NETWORKS, Provider } from '@web3-ui/hooks';

describe('ConnectWallet', () => {
  it('renders without throwing', async () => {
    render(
      <Provider network={NETWORKS.mainnet}>
        <ConnectWallet />
      </Provider>
    );
  });
});
