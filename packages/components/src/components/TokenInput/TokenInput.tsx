import {
  BoxProps,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Select,
  SelectProps
} from '@chakra-ui/react';
import React from 'react';

export interface Token {
  // token sybmol
  symbol: string;
  // token contract address
  address: string;
}

const TokenInput = ({
  label,
  children,
  ...props
}: { label?: string; children: JSX.Element | JSX.Element[] } & BoxProps) => {
  return (
    <FormControl {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup w={'fit-content'}>{children}</InputGroup>
    </FormControl>
  );
};

TokenInput.Input = ({
  value,
  setValue,
  ...props
}: { value: string; setValue: (value: string) => void } & InputProps) => {
  return (
    <Input
      {...props}
      type="number"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

TokenInput.Select = ({
  token,
  setToken,
  tokensList,
  ...props
}: {
  token: string;
  setToken: (token: string) => void;
  tokensList: Token[];
} & SelectProps) => {
  return (
    <InputRightElement w="fit-content">
      <Select {...props} value={token} onChange={e => setToken(e.target.value)}>
        {tokensList.map(({ symbol, address }) => (
          <option key={symbol} value={address}>
            {symbol.toUpperCase()}
          </option>
        ))}
      </Select>
    </InputRightElement>
  );
};

export default TokenInput;
