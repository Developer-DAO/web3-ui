import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import { Web3Context } from '..';
import { ERC20ABI } from '../constants';
import { BigNumber } from '@ethersproject/bignumber';

interface Props {
  tokenAddress: string;
  accountAddress: string;
}

/**
 * Gets the token balance of the provided account.
 * @param tokenAddress Address of the token
 * @param accountAddress Address of the account
 * @returns {
 * balance: gives account balance for the token in Wei as a string
 * loading: True until the transaction is executing, false otherwise
 * error: Contains the error object if the transaction failed, null otherwise.
 * decimals: number of decimals the token contract is using
 * formattedBalance: Balance in ethers eg. 0.01 ETH, 20 GTC, etc.
 * balanceInBigNumber: Balance in BigNumber
 * }
 */

export function useTokenBalance({ tokenAddress, accountAddress }: Props) {
  const context = useContext(Web3Context);
  const provider = context?.provider;

  const [balance, setBalance] = useState<BigNumber>();
  const [decimals, setDecimals] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getBalance = async () => {
    try {
      const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider!);
      const balance = await contract.balanceOf(accountAddress);
      const decimals = await contract.decimals();
      setBalance(balance);
      setDecimals(decimals);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (!(tokenAddress && accountAddress && provider)) {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    getBalance();
    setLoading(false);
  }, [tokenAddress, accountAddress]);

  return {
    balance: balance?.toString(), // The balance in wei
    loading,
    error,
    decimals,
    formattedBalance: balance && ethers.utils.formatUnits(balance, decimals), // The balance in ethers eg. 0.01 ETH, 20 GTC, etc.
    balanceInBigNumber: balance,
  };
}
