import { renderHook } from '@testing-library/react-hooks';
import React, { ReactNode } from 'react';
import { useTokenBalance } from './useTokenBalance';
import { Web3Context, Web3ContextType } from '../Provider';
import { BigNumber, ethers } from 'ethers';

jest.mock('ethers', () => ({
  ...jest.requireActual('ethers'),
  ethers: {
    ...jest.requireActual('ethers').ethers,
    Contract: class ContractStub {
      balanceOf(addr) {
        //Throws an exception if address is not valid
        //And causes the hook to fail
        ethers.utils.getAddress(addr);
        return BigNumber.from(ethers.utils.parseEther('1.0'));
      }
      decimals() {
        return ethers.BigNumber.from('18');
      }
    },
  },
}));

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
          //@ts-ignore
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
          //@ts-ignore
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
          //@ts-ignore
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
