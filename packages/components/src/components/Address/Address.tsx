import { Input } from '@chakra-ui/input';
import React from 'react';

export interface AddressProps {
  value: string;
}

export const Address: React.FC<AddressProps> = ({ value }) => {
  return <Input value={value} />;
};
