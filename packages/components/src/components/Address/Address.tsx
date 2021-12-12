import { Input } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
  /**
   * Shorten the address if it does not resolve to an ENS name
   */
  shortened?: boolean;
}

/**
 * A component to display an address
 */
export const Address: FC<AddressProps> = ({ value, shortened = false }) => {
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

  return <Input value={displayAddress} />;
};
