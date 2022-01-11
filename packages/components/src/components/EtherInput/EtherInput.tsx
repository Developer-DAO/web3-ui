import {
  Input,
  InputGroup,
  InputRightAddon,
  FormErrorMessage,
  InputGroupProps,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import React from 'react';
import { ethers } from 'ethers';

export interface EtherInputProps {
  /**
   * Specifies the value of the EtherInput
   */
  value: string;

  /**
   * Input unit of the value entered in EtherInput
   */
  unit?: 'wei' | 'ether';

  /**
   * The label for EtherInput
   */
  label?: string;

  /**
   * Accepts a function that would be triggered when the value inside EtherInput changes.
   */
  onChange: (value: string) => void;

  /**
   * Whether you want to display the unit on the right side of the input field or not.
   * @default true
   */
  showUnit?: boolean;

  placeholder?: string;

  /**
   * In case of an error, this prop would be used to display the error message. The component does not validate the input for you.
   */
  error?: string;
}
/**
 * An input field that accepts ether values. Always returns the value in wei so that you can directly use it in transactions without any conversion.
 */
export const EtherInput: React.FC<EtherInputProps & InputGroupProps> = ({
  value,
  unit = 'ether',
  label,
  onChange,
  showUnit = true,
  placeholder,
  error,
  ...props
}) => {
  const [plainValue, setPlainValue] = React.useState<string>();
  const _placeholder = placeholder || `Enter value in ${unit}`;

  return (
    <FormControl isInvalid={!!error}>
      {label ? <FormLabel mb="8px">{label}: </FormLabel> : ''}
      <InputGroup {...props}>
        <Input
          placeholder={_placeholder}
          value={plainValue}
          onChange={(e) => {
            setPlainValue(e.target.value);
            if (unit === 'ether') {
              onChange(ethers.utils.parseEther(e.target.value).toString());
            } else {
              onChange(e.target.value);
            }
          }}
        />
        {showUnit && (
          <InputRightAddon>{unit === 'ether' ? 'Ξ' : 'wei'}</InputRightAddon>
        )}
      </InputGroup>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
