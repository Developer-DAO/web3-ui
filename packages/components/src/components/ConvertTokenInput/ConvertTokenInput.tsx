import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Button,
  InputProps,
} from '@chakra-ui/react';
import React, { useState } from 'react';

// A number input component with built-in conversion feature from wei <-> ether
export const ConvertTokenInput: React.FC<InputProps> = ({ ...props }) => {
  const [currentUnit, setCurrentUnit] = useState('ether');
  const [targetUnit, setTargetUnit] = useState('wei');
  const [val, setVal] = useState(1);

  // The convert() function converts the current value into the unit selected by the user
  const convert = () => {
    if (targetUnit === 'wei') {
      setCurrentUnit('wei');
      setTargetUnit('ether');
      setVal(val * 1000000000000000000);
    } else if (targetUnit === 'ether') {
      setCurrentUnit('ether');
      setTargetUnit('wei');
      setVal(val / 1000000000000000000);
    }
  };

  const handleInputChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftAddon children={currentUnit} />
      <Input
        type='number'
        placeholder='Enter value'
        value={val}
        onChange={handleInputChange}
        {...props}
      />
      <InputRightElement width='5rem'>
        <Button h='1.75rem' size='sm' onClick={convert}>
          To {targetUnit}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
