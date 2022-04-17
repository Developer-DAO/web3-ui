import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useDebounce } from './useDebounce';
import { JsonRpcSigner } from '@ethersproject/providers';
import './AddressInput.css';

export interface AddressInputProps {
  /**
   * The provider or signer to fetch the address from the ens
   */
  provider: ethers.providers.Web3Provider | JsonRpcSigner;
  /**
   * The value for the input
   */
  value: string;
  /**
   * The label for the input
   */
  label?: string;
  /**
   * Change handler for the text input
   */
  onChange: (value: string) => void;
  /**
   * className for the container
   */
  className?: string;
  /**
   * className for the input
   */
  inputClassName?: string;
}

/**
 * A text input component that is used to get ETH addresses. ENS support included. You can also pass all the styling props of the Chakra UI Input component.
 */
export const AddressInput: React.FC<
  AddressInputProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({
  provider,
  value: _value,
  onChange,
  label,
  className,
  inputClassName,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 700);
  const [error, setError] = useState<null | string>(null);
  const regex = /^0x[a-fA-F0-9]{40}$/;

  const getAddressFromEns = async () => {
    try {
      const address = await provider.resolveName(debouncedValue);
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
      } else if (
        debouncedValue.endsWith('.eth') ||
        debouncedValue.endsWith('.xyz')
      ) {
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
    <div className={`Web3UI_AddressInput__Container ${className}`}>
      {label && <label className="Web3UI_AddressInput__Label">{label}</label>}
      <input
        className={`Web3UI_AddressInput__Input ${inputClassName}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
      {error && <p className="Web3UI_AddressInput__ErrorMessage">{error}</p>}
    </div>
  );
};
