import { Input } from '@chakra-ui/react';
import React from 'react';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
  /**
   * boolean to shorten the address if addresses does not resolve to an ENS name
   */
  shortened?: boolean;
}

/**
 * A component to display an address
 */
export const Address: React.FC<AddressProps> = ({ value, shortened }) => {
  if (shortened) {
    if (value.includes('.eth')) {
      return <Input value={value} />;
    } else if (value === '' || value === 'Not connected') {
      return <Input value={value} />;
    } else {
      let address: string;
      address = `${value.substring(0, 4)}...${value.substring(value.length - 4)}`;
      return <Input value={address.toLowerCase()} />;
    }
  } else {
    return <Input value={value} />;
  }
};
