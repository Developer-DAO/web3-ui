import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
  /**
   * Wheter the address can be copied or not
   */
  copiable?: boolean;
  /**
   * Shorten the address if it does not resolve to an ENS name
   */
  shortened?: boolean;
}

interface EventTarget {
  value: string;
}

interface SyntheticEvent {
  currentTarget: EventTarget;
}

/**
 * A component to display an address
 */
export const Address: React.FC<AddressProps> = ({ value, copiable = false, shortened = false }) => {
  const [error, setError] = useState<null | string>(null);
  const [copied, setCopied] = useState<boolean>(false);
  let displayAddress: string;

  if (shortened && !value.includes('.eth') && !value.includes('Not connected')) {
    displayAddress = `${value.substring(0, 4)}...${value.substring(
        value.length - 4
      )}`.toLowerCase();
  } else {
    displayAddress = value;
  }

  const handleClick = async (event: SyntheticEvent): Promise<void> => {
    const value = event.currentTarget.value as string;

    setError(null);
    setCopied(false);

    if (copiable && value) {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
      } catch (error) {
        setError(error as string);
      }
    }
  };

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        {copiable && (
          <InputRightElement
            pointerEvents='none'
            children={copied ? <CheckIcon color='green.500' /> : <CopyIcon color='gray.300' />}
          />
        )}
        <Input value={displayAddress} onClick={handleClick} readOnly />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
