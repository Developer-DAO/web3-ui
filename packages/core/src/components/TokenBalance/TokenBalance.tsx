import React, { useContext, useEffect, useState } from 'react';
import { FlexProps } from '@chakra-ui/react';
import { ERC20ABI, useTokenBalance, Web3Context } from '@web3-ui/hooks';
import { ethers } from 'ethers';
import { TokenBalance as TokenBalanceStateless } from '@web3-ui/components';

export interface TokenBalanceProps {
  /**
   * The contract address of the ERC20 Token
   */
  tokenAddress: string;
  /**
   * The owners address
   */
  accountAddress: string;
  /**
   * The value of one token in USD
   */
  usdRate: number;
  /**
   * Image of the token (optional)
   */
  imgUrl?: string;
}

/**
 * A component to display the balance of an ERC20 token for a given address
 */
export const TokenBalance: React.FC<TokenBalanceProps & FlexProps> = (
  props
) => {
  const { tokenAddress, accountAddress, usdRate, imgUrl } = props;

  const web3Context = useContext(Web3Context);
  const provider = web3Context?.provider;

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  const { balance, decimals } = useTokenBalance({
    tokenAddress,
    accountAddress,
  });

  useEffect(() => {
    getTokenNameAndSymbol();
  }, []);

  //Just display the first 3 decimal places of the balance
  const calcBalance = () => {
    if (balance === undefined || decimals === undefined) {
      return 0;
    }
    return Number.parseFloat(
      (Number.parseInt(balance) / 10 ** decimals).toFixed(3)
    );
  };
  //Just display the first 3 decimal places of the value
  const calcValue = () => {
    const balance = calcBalance();
    return (balance * usdRate).toFixed(3);
  };
  //Fetch name and symbol from the smart contract
  //Maybe it would make sense to provide them as props to avoid loading time ?
  const getTokenNameAndSymbol = async () => {
    const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider!);
    const [name, symbol] = await Promise.all([
      contract.name(),
      contract.symbol(),
    ]);

    setName(name);
    setSymbol(symbol);
  };

  const getTrustWalletImageUrl = () =>
    `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${tokenAddress}/logo.png`;

  return (
    <TokenBalanceStateless
      name={name}
      symbol={symbol}
      balance={calcBalance()}
      usdValue={+calcValue()}
      imgUrl={imgUrl ? imgUrl : getTrustWalletImageUrl()}
    />
  );
};
