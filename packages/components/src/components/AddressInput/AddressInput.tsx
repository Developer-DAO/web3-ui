import {
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  InputProps,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useDebounce } from './useDebounce';

export interface AddressInputProps {
  provider: ethers.providers.Web3Provider;
  value: string;
  onChange: (value: string) => void;
}

export const AddressInput: React.FC<AddressInputProps & InputProps> = ({
  provider,
  value,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const deboucedValued = useDebounce(inputValue, 700);
  const [ensValue, setEnsValue] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState<null | string>(null);
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
      setError(error as string);
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
      setError(error as string);
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
      setError(null);
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
    <FormControl isInvalid={!!error}>
      <FormLabel>Input address</FormLabel>
      <Input
        isInvalid={!!error}
        mt={2}
        mb={2}
        {...props}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Input address'
      />
      <FormErrorMessage>{error ? ' ' + error : ''}</FormErrorMessage>
      <Text>Value: {value}</Text>
      <Text>Ens: {ensValue}</Text>
      <Text>Balance: {balance}</Text>
    </FormControl>
  );
};
