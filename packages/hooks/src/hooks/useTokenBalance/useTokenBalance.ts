import React, { useContext } from 'react';
import { ethers } from 'ethers';
import { Web3Context } from '../../Provider';
import ERC20 from './ERC20ABI.json';

/**
 * @param contractAddress -> the address of the ERC20 token contract
 * @param ownerAddress -> the address of the owner which balance should be fetched

 */
export const useTokenBalance = (contractAddress: string, ownerAddress: string) => {
  const [balance, setBalance] = React.useState<string>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const { provider } = useContext(Web3Context);

  React.useEffect(() => {
    getTokenBalance();
  });

  const getTokenBalance = async () => {
    if (provider === undefined) {
      setError(
        'provider is undefined. Please make sure to you the hook within the Web3Context Provider '
      );
      setLoading(false);
      return;
    }
    try {
      const contract = new ethers.Contract(contractAddress, ERC20, provider);
      const balanceFuture = contract.balanceOf(ownerAddress);
      const decimalsFuture = contract.decimals();

      const [resolvedBalance, resolvedDecimals] = await Promise.all([
        balanceFuture,
        decimalsFuture,
      ]);

      const balanceAsNumber = Number.parseInt(resolvedBalance);
      const displayBalance = (balanceAsNumber / 10 ** resolvedDecimals).toFixed(3);

      setBalance(displayBalance);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return [balance, loading, error];
};
