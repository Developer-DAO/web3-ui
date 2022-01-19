import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Select,
  SelectFieldProps
} from '@chakra-ui/react';
import React from 'react';
import { defaultTokens } from './tokens';

export interface Token {
  // token sybmol
  symbol: string;
  // token contract address
  address: string;
}

export interface TokenInputProps {
  /**
   * an array of tokens to display
   */
  tokens?: Token[];
  /**
   * value of the input
   */
  value: string;
  /**
   * onChange handler
   */
  onValueChange: (value: string) => void;
  /**
   * label for the input
   */
  label?: string;
  /**
   * selected token
   */
  selectedToken: string;
  /**
   * token change hanlder
   */
  onTokenChange: (token: string) => void;
  /**
   * want to show default tokens
   */
  showDefualtTokens?: boolean;
  /**
   * style props for the input
   */
  inputProps?: InputProps;
  /**
   * style props for the select
   */
  selectProps?: SelectFieldProps;
}

/**
 * A number input component that is used to enter number of tokens and also select the token from a list of tokens.
 */

export const TokenInput: React.FC<TokenInputProps> = ({
  tokens = [],
  value,
  onValueChange,
  label,
  selectedToken,
  onTokenChange,
  showDefualtTokens = true,
  inputProps,
  selectProps,
  ...props
}) => {
  const [finalTokens, setFinalTokens] = React.useState<Token[]>(tokens);
  React.useEffect(() => {
    if (showDefualtTokens) {
      const newTokens = [...defaultTokens, ...tokens];
      setFinalTokens(newTokens);
    }
  }, []);
  return (
    <FormControl {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Input
          type="number"
          {...inputProps}
          value={value}
          onChange={e => onValueChange(e.target.value)}
        />
        <InputRightElement w="7rem">
          <Select
            {...selectProps}
            value={selectedToken}
            onChange={e => onTokenChange(e.target.value)}
          >
            {finalTokens.map(({ symbol, address }) => (
              <option key={symbol} value={address}>
                {symbol.toUpperCase()}
              </option>
            ))}
          </Select>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
