import { Input } from '@chakra-ui/input';
import { Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useDebounce } from './useDebounce';

export interface AddressInputProps {
  provider: ethers.providers.Web3Provider;
  value: string;
  onChange: (value: string) => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({ provider, value, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const deboucedValued = useDebounce(inputValue, 700);
  const [ensValue, setEnsValue] = useState('');
  const [balance, setBalance] = useState('');
  const regex = /^0x[a-fA-F0-9]{40}$/;

  useEffect(() => {
    console.log('Provider', { provider });
  }, [provider]);
  const getAddressFromEns = async () => {
    try {
      let address = await provider.resolveName(deboucedValued);
      getBalance();
      return address;
    } catch (error) {
      console.log('error in fetching ens', error);
      return;
    }
  };

  const getBalance = async () => {
    try {
      let balance = await provider.getBalance(deboucedValued);
      console.log('balance : ', balance);
      setBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      console.log('error in fetching balance', error);
    }
  };

  useEffect(() => {
    console.log('useEffect running....');
    if (deboucedValued) {
      console.log('deboucedValued : ', deboucedValued);
      setBalance('');
      setEnsValue('');
      onChange('');
      if (regex.test(deboucedValued)) {
        console.log('deboucedValued is a valid address');
        onChange(deboucedValued);
        getBalance();
      } else if (deboucedValued.endsWith('.eth') || deboucedValued.endsWith('.xyz')) {
        console.log('current value is ens');
        setEnsValue(deboucedValued);
        getAddressFromEns().then((address) => onChange(address ? address : ''));
      }
    }
  }, [deboucedValued]);
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
