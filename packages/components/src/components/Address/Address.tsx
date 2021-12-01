import { Input } from '@chakra-ui/react';
import React from 'react';

export interface AddressProps {
  value: string;
}

export const Address: React.FC<AddressProps> = ({ value }) => {
  return <Input value={value} />;
};
