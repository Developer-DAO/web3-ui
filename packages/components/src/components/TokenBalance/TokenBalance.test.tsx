import React from 'react';
import { render, screen } from '@testing-library/react';
import { TokenBalance } from './TokenBalance';

describe('TokenBalance component', () => {
  it('should render without throwing', async () => {
    render(
      <TokenBalance
        name="Devs 4 Revolution"
        symbol="$CODE"
        balance={200}
        usdValue={100}
      />
    );
    expect(await screen.findByText('Devs 4 Revolution')).toBeInTheDocument();
    expect(await screen.findByText('$CODE')).toBeInTheDocument();
    expect(await screen.findByText('200')).toBeInTheDocument();
    expect(await screen.findByText('$100')).toBeInTheDocument();
  });

  //TODO: Add test for image
});
