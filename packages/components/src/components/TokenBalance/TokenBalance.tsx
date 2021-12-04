import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Logo, TokenLogo } from './components/Logo';
import { useWallet, Web3Context } from '@web3-ui/hooks/src';
import { ethers } from 'ethers';
import ERC20 from './erc.json';

export interface TokenBalanceProps {
  name: string;
  symbol: string;
  address: string;
  owner: string;
  value: number;
  imgUrl?: string | undefined;
}

export const TokenBalance = (props: TokenBalanceProps) => {
  const { name, symbol, address, owner, value, imgUrl } = props;
  const Headline = (name: string) => (
    <Heading as='h3' size='sm'>
      {name}
    </Heading>
  );

  const { connectWallet } = useWallet();

  const { provider } = useContext(Web3Context);

  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    if (provider === undefined) {
      return;
    }
    const contract = new ethers.Contract(address, ERC20, provider);
    const balanceFuture = contract.balanceOf(owner);
    const decimalsFuture = contract.decimals();

    const [resolvedBalance, resolvedDecimals] = await Promise.all([balanceFuture, decimalsFuture]);

    const balanceAsNumber = Number.parseInt(resolvedBalance);
    const displayBalance = (balanceAsNumber / 10 ** resolvedDecimals).toFixed(3);

    setBalance(displayBalance);
  };

  useEffect(() => {
    (async () => {
      await getBalance();
    })();
  }, []);

  return (
    <Flex borderRadius='lg' borderWidth='1px' overflow='hidden' px='4' py='2'>
      <Box w='50px' pr='4'>
        <TokenLogo tokenContractAddress={address} />
      </Box>
      <Box flex='3'>
        {Headline(symbol)}
        <p>{name}</p>
      </Box>
      <Box flex='1'>
        {Headline('Balance')}
        <p>{balance}</p>
      </Box>
      <Box flex='1'>
        {Headline('Value')}
        <p>{(balance * value).toFixed(3)}</p>
      </Box>
    </Flex>
  );
};
