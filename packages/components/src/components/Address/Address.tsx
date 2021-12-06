import { Input } from '@chakra-ui/react';
import React from 'react';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
}

/**
 * A component to display an address
 */
export const Address: React.FC<AddressProps> = ({ value }) => {
  return <Input value={value} />;
};
