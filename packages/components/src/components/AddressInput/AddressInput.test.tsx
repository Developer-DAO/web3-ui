import React from 'react';
import { render } from '@testing-library/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';

describe('AddressInput', () => {
  it('renders', () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const [value, setValue] = React.useState('');

    const { container } = render(
      <AddressInput value={value} setValue={setValue} provider={provider} />
    );
    expect(container).toBeInTheDocument();
  });
});
