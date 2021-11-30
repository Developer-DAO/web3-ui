import { Button } from '@chakra-ui/react';
import React from 'react';

export interface SigninProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Signin: React.FC<SigninProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Sign-in With Ethereum</Button>;
};
