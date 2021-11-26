import React from 'react';
import { ConnectWallet } from '..';
import { render } from '@testing-library/react';

describe('ConnectWallet', () => {
  it('renders', () => {
    const { getByText } = render(<ConnectWallet />);
    const Button = getByText('Connect Wallet');
    expect(Button).toBeTruthy();
  });
});
