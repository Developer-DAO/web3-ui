import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddressInput } from '.';
import { ethers } from 'ethers';
import 'regenerator-runtime/runtime';

const WALLET_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const SIGNED_MESSAGE =
  '0xa2162955fbfbac44ad895441a3501465861435d6615053a64fc9622d98061f1556e47c6655d0ea02df00ed6f6050298eea381b4c46f8148ecb617b32695bdc451c';

const WINDOW_ETHEREUM = {
  isMetaMask: true,
  request: async (request: { method: string; params?: Array<unknown> }) => {
    if (['eth_accounts', 'eth_requestAccounts'].includes(request.method)) {
      return [WALLET_ADDRESS];
    } else if (['personal_sign'].includes(request.method)) {
      return SIGNED_MESSAGE;
    }

    throw Error(`Unknown request: ${request.method}`);
  },
};

jest.mock('ethers', () => {
  const original = jest.requireActual('ethers');
  return {
    ...original,
    ethers: {
      ...original.ethers,
    },
  };
});

const Component = () => {
  const provider = new ethers.providers.Web3Provider(WINDOW_ETHEREUM);
  const [value, setValue] = React.useState('');

  return (
    <AddressInput
      value={value}
      onChange={(e) => setValue(e)}
      provider={provider}
      placeholder="Input address"
    />
  );
};

describe('AddressInput', () => {
  it('renders AddressInput correctly', () => {
    const { container } = render(<Component />);
    expect(container).toBeTruthy();
  });

  it('changes Input value correctly', () => {
    const { getByPlaceholderText } = render(<Component />);
    const input = getByPlaceholderText('Input address') as HTMLInputElement;

    fireEvent.change(input, { target: { value: WALLET_ADDRESS } });
    expect(input.value).toBe(WALLET_ADDRESS);
  });
});
