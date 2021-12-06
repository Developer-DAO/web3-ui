import { FormControl, FormLabel, Input, FormErrorMessage, InputProps } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useDebounce } from './useDebounce';
import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider';

export interface AddressInputProps {
  /**
   * @dev The provider or signer to fetch the address from the ens
   * @type JsonRpcSigner or ethers.providers.Web3Provider
   */
  provider: ethers.providers.Web3Provider | JsonRpcSigner;
  /**
   * @dev The value for the input
   * @type string
   * @default ''
   */
  value: string;
  /**
   * @dev The label for the input
   * @type string
   * @default null
   */
  label?: string;
  /**
   * @dev Change handler for the text input
   * @type (value: string) => void
   */
  onChange: (value: string) => void;
}

/**
 * @dev A text input component that is used to get the address of the user from the ens. You can also pass all the styling props of the Chakra UI Input component.
 * @param provider The provider or signer to fetch the address from the ens
 * @param value The value for the input
 * @param onChange Change hanlder for the text input
 * @returns JSX.Element
 */
export const AddressInput: React.FC<AddressInputProps & InputProps> = ({
  provider,
  value,
  onChange,
  label,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 700);
  const [error, setError] = useState<null | string>(null);
  const regex = /^0x[a-fA-F0-9]{40}$/;

  const getAddressFromEns = async () => {
    try {
      let address = await provider.resolveName(debouncedValue);
      if (!address) {
        setError('Invalid Input');
      }
      return address;
    } catch (error) {
      setError(error as string);
      return;
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      onChange('');
      setError(null);
      if (regex.test(debouncedValue)) {
        onChange(debouncedValue);
      } else if (debouncedValue.endsWith('.eth') || debouncedValue.endsWith('.xyz')) {
        getAddressFromEns().then((address) => onChange(address ? address : ''));
      }
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (inputValue === '') {
      onChange('');
      setError(null);
    }
  }, [inputValue]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>Input address</FormLabel>}
      <Input
        isInvalid={!!error}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
      <FormErrorMessage>{error ? ' ' + error : ''}</FormErrorMessage>
    </FormControl>
  );
};
