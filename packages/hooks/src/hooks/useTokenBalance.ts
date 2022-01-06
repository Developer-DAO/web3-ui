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
 * @dev Hook to use account token balance
 * @param {string} tokenAddress Address of the token
 * @param {string} accountAddress Address of the account
 * @returns {
 * balance {string}:  balance in Wei converted to string.
 * loading {boolean}: True until transaction is undergoing, false when error is caught.
 * error {object}: Contains the error object if the transaction failed, null otherwise.
 * decimals {number}: decimal digits of balance.
 * formattedBalance {number}: Balance in ethers eg. 0.01 ETH, 20 GTC, etc.
 * balanceInBigNumber {number}: Balance
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
    const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider!);
    const balance = await contract.balanceOf(accountAddress);
    const decimals = await contract.decimals();
    setBalance(balance);
    setDecimals(decimals);
  };

  useEffect(() => {
    if (tokenAddress && accountAddress && provider) {
      setError(false);
      setLoading(true);
      try {
        getBalance();
      } catch (error) {
        console.error(error);
        setError(true);
      }
      setLoading(false);
    }
  }, [tokenAddress, accountAddress]);

  return {
    balance: balance?.toString(), // The balance in wei
    loading,
    error,
    decimals,
    formattedBalance: balance && ethers.utils.formatUnits(balance, decimals), // The balance in ethers eg. 0.01 ETH, 20 GTC, etc.
    balanceInBigNumber: balance
  };
}
