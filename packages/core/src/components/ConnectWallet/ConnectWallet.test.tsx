import React from 'react';
import { render } from '@testing-library/react';
import { ConnectWallet } from '.';

describe('ConnectWallet', () => {
  it('renders without throwing', async () => {
    render(<ConnectWallet />);
  });
});
