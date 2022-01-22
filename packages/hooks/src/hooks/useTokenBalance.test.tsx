import { renderHook } from '@testing-library/react-hooks';
import React, { ReactNode } from 'react';
import { useTokenBalance } from './useTokenBalance';
import { Web3Context, Web3ContextType } from '../Provider';
import { BigNumber, ethers } from 'ethers';

/*
To effectively unit test `useTokenBalance`, we need to make sure that we're only
testing the functionality of the hook itself and not its dependencies (like
`ethers`) .

Normally, the `ethers` dependency makes network calls to validate and use a
contract. Since we can't control this functionality, we'll mock the parts of
`ethers` that cause that to happen. This allows us to replace unpredictable
network behavior with exactly the data we expect it to return, whether that's
a result or an error.

Here's how we make that happen:

1. Mock `ethers` using `jest.mock` so we can replace `ethers.Contract` with our
own fake implementation. Our implementation has methods for `balanceOf` and
`decimals` (the two `Contract` methods that `useTokenBalance` uses) which return
reliable faked data.
2. Wrap the `useTokenBalance` calls under test with a `Web3Context.Provider`
that provides an empty `provider` object.  Since `useTokenBalance` relies on
this context to access `provider`, this allows us to test `useTokenBalance`
without having to create a real `ethers` provider.
*/

// mock the `ethers` module. this allows us to test `Contract` calls without
// `ethers` network functionality
jest.mock('ethers', () => {
  // get the actual `ethers` module because we only want to mock
  // `ethers.Contract` while retaining all other functionality like
  // `ethers.utils.getAddress` and `ethers.utils.parseEther`
  const ethersActual = jest.requireActual('ethers');

  return {
    ...ethersActual,
    ethers: {
      ...ethersActual.ethers,
      // mock the `Contract` class and the two methods from that class that we
      // use in `useTokenBalance`
      Contract: class ContractStub {
        balanceOf(addr) {
          // Throws an exception if address is not valid and causes the hook to
          // fail
          ethers.utils.getAddress(addr);
          return BigNumber.from(ethers.utils.parseEther('1.0'));
        }
        decimals() {
          return ethers.BigNumber.from('18');
        }
      },
    },
  };
});

/**
 * A "mock" `Provider` for `Web3Context` that defaults to an empty object
 * definition for `provider`. This allows us to avoid using `ethers` network
 * calls while still executing the mocked contract methods.
 */
const Web3ContextTestProvider = ({
  children,
  provider = {},
}: {
  children: ReactNode;
  provider?: Partial<ethers.providers.Web3Provider>;
}) => {
  return (
    <Web3Context.Provider value={{ provider: provider } as Web3ContextType}>
      {children}
    </Web3Context.Provider>
  );
};

describe('useTokenBalanceTest', () => {
  test('happy path - returns accountsAddresses balance if both accountAddress and tokenAddress are defined', async () => {
    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
          accountAddress: '0x503828976D22510aad0201ac7EC88293211D23Da',
        }),
      { wrapper: Web3ContextTestProvider }
    );

    await waitFor(() =>
      expect(result.current).toEqual({
        balance: BigNumber.from(ethers.utils.parseEther('1.0')).toString(),
        loading: false,
        error: false,
        decimals: BigNumber.from('18'),
        formattedBalance: '1.0',
        balanceInBigNumber: BigNumber.from(ethers.utils.parseEther('1.0')),
      })
    );
  });

  test('tokenAddress is undefined - hook returns error; balance and decimals are undefined', async () => {
    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          // @ts-expect-error testing that `tokenAddress` is `undefined`
          tokenAddress: undefined,
          accountAddress: '0x503828976D22510aad0201ac7EC88293211D23Da',
        }),
      { wrapper: Web3ContextTestProvider }
    );

    await waitFor(() =>
      expect(result.current).toEqual({
        balance: undefined,
        loading: false,
        error: true,
        decimals: undefined,
        formattedBalance: undefined,
        balanceInBigNumber: undefined,
      })
    );
  });

  test('accountAddress is undefined - hook returns error; balance and decimals are undefined', async () => {
    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
          // @ts-expect-error testing that `accountAddress` is undefined
          accountAddress: undefined,
        }),
      { wrapper: Web3ContextTestProvider }
    );

    await waitFor(() =>
      expect(result.current).toEqual({
        balance: undefined,
        loading: false,
        error: true,
        decimals: undefined,
        formattedBalance: undefined,
        balanceInBigNumber: undefined,
      })
    );
  });

  test('accountAddress is invalid - hook returns error; balance and decimals are undefined', async () => {
    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
          accountAddress: 'bar',
        }),
      { wrapper: Web3ContextTestProvider }
    );

    await waitFor(() =>
      expect(result.current).toEqual({
        balance: undefined,
        loading: false,
        error: true,
        decimals: undefined,
        formattedBalance: undefined,
        balanceInBigNumber: undefined,
      })
    );
  });
});
