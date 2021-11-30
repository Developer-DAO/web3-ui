import { Input } from '@chakra-ui/input';
import { Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export interface AddressInputProps {
  provider: ethers.providers.Web3Provider;
  value: string;
  setValue: (value: string) => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({ provider, value, setValue }) => {
  const [inputValue, setInputValue] = useState('');
  const [ensValue, setEnsValue] = useState('');
  const [balance, setBalance] = useState('');
  const regex = /^0x[a-fA-F0-9]{40}$/;

  const getAddressFromEns = async () => {
    try {
      let address = await provider.resolveName(inputValue);
      getBalance();
      return address;
    } catch (error) {
      console.log('error in fetching ens', error);
      return;
    }
  };

  const getBalance = async () => {
    try {
      let balance = await provider.getBalance(inputValue);
      console.log('balance : ', balance);
      setBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      console.log('error in fetching balance', error);
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setBalance('');
      if (regex.test(inputValue)) {
        console.log('inputValue is a valid address');
        setValue(inputValue);
        getBalance();
      } else if (inputValue.endsWith('.eth') || inputValue.endsWith('.xyz')) {
        console.log('current value is ens');
        setEnsValue(inputValue);
        getAddressFromEns().then((address) => setValue(address ? address : ''));
      }
    }
  }, [inputValue]);
  return (
    <div>
      <Text>Input address</Text>
      <Input
        mt={2}
        mb={2}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Input address'
      />
      <Text>Value: {value}</Text>
      <Text>Ens: {ensValue}</Text>
      <Text>Balance: {balance}</Text>
    </div>
  );
};
