import React from 'react';
import { Input } from '@chakra-ui/react';

export interface ShortAddressProps {
  /**
   * Display a shortened address if the address is not resolved to an ENS name
   */
  value: string;
}

/**
 * A component to display a shortened addres if the address is not resolved to an ENS name
 */
export const ShortAddress: React.FC<ShortAddressProps> = ({ value }) => {
  if (value.includes('.eth')) {
    return <Input value={value} />;
  } else if (value === '' || value === 'not connected') {
    return <Input value={'not connected'} />;
  } else {
    let address: string;
    address = `${value.substring(0, 6)}...${value.substring(value.length - 4)}`;
    return <Input value={address.toLowerCase()} />;
  }
};
