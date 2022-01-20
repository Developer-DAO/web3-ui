import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useTokenBalance } from './useTokenBalance';
import { Web3Context } from '../Provider';
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

describe('useTokenBalanceTest', () => {
  test('happy path - returns accountsAddresses balance if both accountAddress and tokenAddress are defined  ', async () => {
    const wrapper = ({ children }) => (
      <>
        {/* @ts-ignore */}
        <Web3Context.Provider value={{ provider: {} }}>
          {children}
        </Web3Context.Provider>
      </>
    );

    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
          accountAddress: '0x503828976D22510aad0201ac7EC88293211D23Da',
        }),
      { wrapper }
    );

    await waitFor(() =>
      expect(result.current.balance).toEqual(
        BigNumber.from(ethers.utils.parseEther('1.0')).toString()
      )
    );
    await waitFor(() => expect(result.current.loading).toEqual(false));
    await waitFor(() => expect(result.current.error).toEqual(false));
    await waitFor(() =>
      expect(result.current.decimals).toEqual(BigNumber.from('18'))
    );
    await waitFor(() => expect(result.current.formattedBalance).toEqual('1.0'));
    await waitFor(() =>
      expect(result.current.balanceInBigNumber).toEqual(
        BigNumber.from(ethers.utils.parseEther('1.0'))
      )
    );
  });

  test('tokenAddress is undefined - hook returns error; balance and decimals are undefined', async () => {
    const wrapper = ({ children }) => (
      <>
        {/* pass an empty provider because we don't wan't to actually request an eth provider */}
        {/* all web3 interaction should be mocked using the ContractSub above */}
        {/* @ts-ignore */}
        <Web3Context.Provider value={{ provider: {} }}>
          {children}
        </Web3Context.Provider>
      </>
    );

    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          //@ts-ignore
          tokenAddress: undefined,
          accountAddress: '0x503828976D22510aad0201ac7EC88293211D23Da',
        }),
      { wrapper }
    );

    await waitFor(() => expect(result.current.balance).toBeUndefined());

    await waitFor(() => expect(result.current.loading).toEqual(false));
    await waitFor(() => expect(result.current.error).toEqual(true));
    await waitFor(() => expect(result.current.decimals).toBeUndefined());
    await waitFor(() =>
      expect(result.current.formattedBalance).toBeUndefined()
    );
    await waitFor(() =>
      expect(result.current.balanceInBigNumber).toBeUndefined()
    );
  });

  test('accountAddress is undefined - hook returns error; balance and decimals are undefined', async () => {
    const wrapper = ({ children }) => (
      <>
        {/* @ts-ignore */}
        <Web3Context.Provider value={{ provider: {} }}>
          {children}
        </Web3Context.Provider>
      </>
    );

    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
          //@ts-ignore
          accountAddress: undefined,
        }),
      { wrapper }
    );

    await waitFor(() => expect(result.current.balance).toBeUndefined());
    await waitFor(() => expect(result.current.loading).toEqual(false));
    await waitFor(() => expect(result.current.error).toEqual(true));
    await waitFor(() => expect(result.current.decimals).toBeUndefined());
    await waitFor(() =>
      expect(result.current.formattedBalance).toBeUndefined()
    );
    await waitFor(() =>
      expect(result.current.balanceInBigNumber).toBeUndefined()
    );
  });

  test('accountAddress is invalid - hook returns error; balance and decimals are undefined', async () => {
    const wrapper = ({ children }) => (
      <>
        {/* @ts-ignore */}
        <Web3Context.Provider value={{ provider: {} }}>
          {children}
        </Web3Context.Provider>
      </>
    );

    const { result, waitFor } = renderHook(
      () =>
        useTokenBalance({
          tokenAddress: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
          //@ts-ignore
          accountAddress: 'bar',
        }),
      { wrapper }
    );
    await waitFor(() => expect(result.current.balance).toBeUndefined());
    await waitFor(() => expect(result.current.loading).toEqual(false));
    await waitFor(() => expect(result.current.error).toEqual(true));
    await waitFor(() => expect(result.current.decimals).toBeUndefined());
    await waitFor(() =>
      expect(result.current.formattedBalance).toBeUndefined()
    );
    await waitFor(() =>
      expect(result.current.balanceInBigNumber).toBeUndefined()
    );
    console.log(result.current);
  });
});
