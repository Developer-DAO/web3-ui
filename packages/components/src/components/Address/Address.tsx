import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
  /**
   * Whether the address can be copied or not
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
  let feedbackTimeOut: ReturnType<typeof setTimeout>;
  let displayAddress: string;

  if (shortened) {
    if (value.includes('.eth')) {
      displayAddress = value;
    } else if (value === '' || value === 'Not connected') {
      displayAddress = value;
    } else {
      displayAddress = `${value.substring(0, 4)}...${value.substring(
        value.length - 4
      )}`.toLowerCase();
    }
  } else {
    displayAddress = value;
  }

  const handleClick = async (event: SyntheticEvent): Promise<void> => {
    if (copiable && value) {
      try {
        await navigator.clipboard.writeText(value);
        setError(null);
        setCopied(true);

        feedbackTimeOut = setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        setError(error as string);
      }
    }
  };

  useEffect(() => {
    return () => clearTimeout(feedbackTimeOut);
  }, []);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        {copiable && (
          <InputRightElement
            pointerEvents='none'
            children={copied ? <CheckIcon color='green.500' /> : <CopyIcon color='gray.300' />}
          />
        )}
        <Input
          onClick={handleClick}
          value={displayAddress}
          cursor={copiable ? 'pointer' : 'initial'}
          readOnly
        />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
