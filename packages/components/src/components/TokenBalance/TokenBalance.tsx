import React, {useContext, useEffect, useState} from 'react';
import {Box, Flex, Image} from '@chakra-ui/react';
import {TokenLogo} from './components/Logo';
import {useTokenBalance, Web3Context} from '@web3-ui/hooks';
import {ethers} from 'ethers';
import {ERC20ABI} from '@web3-ui/hooks';
import {Headline} from './components/Headline';

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
  value: number;
  /**
   * Image of the token (optional)
   */
  imgUrl?: string | undefined;
}

export const TokenBalance = (props: TokenBalanceProps) => {
  const { tokenAddress, accountAddress, value, imgUrl } = props;

  const web3Context = useContext(Web3Context);
  const provider = web3Context?.provider;

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  const { balance, decimals } = useTokenBalance({ tokenAddress, accountAddress });

  useEffect(() => {
    getTokenNameAndSymbol();
  }, []);

  //Just display the first 3 decimal places of the balance
  const calcBalance = () => {
    if (balance === undefined || decimals === undefined) {
      return 0;
    }
    return Number.parseFloat((Number.parseInt(balance) / 10 ** decimals).toFixed(3));
  };
  //Just display the first 3 decimal places of the value
  const calcValue = () => {
    const balance = calcBalance();
    return (balance * value).toFixed(3);
  };
  //Fetch name and symbol from the smart contract
  //Maybe it would make sense to provide them as props to avoid loading time ?
  const getTokenNameAndSymbol = async () => {
    const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider!);
    const [name, symbol] = await Promise.all([contract.name(), contract.symbol()]);

    setName(name);
    setSymbol(symbol);
  };

  return (
    <Flex borderRadius='lg' borderWidth='1px' overflow='hidden' px='4' py='2'>
      <Box w='50px' pr='4'>
        {imgUrl ? <Image src={imgUrl} /> : <TokenLogo tokenContractAddress={tokenAddress} />}
      </Box>
      <Box flex='2'>
        {Headline(symbol)}
        <p>{name}</p>
      </Box>
      <Box flex='1'>
        {Headline('Balance')}
        <p>{calcBalance()}</p>
      </Box>
      <Box flex='1'>
        {Headline('Value')}
        <p>{calcValue()}</p>
      </Box>
    </Flex>
  );
};
