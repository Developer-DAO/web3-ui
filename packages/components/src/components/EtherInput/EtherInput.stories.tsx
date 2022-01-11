import { Text } from '@chakra-ui/react';
import React from 'react';
import { EtherInput } from '.';

export default {
  title: 'Components/EtherInput',
  component: EtherInput
};

const Component = ({ ...props }) => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <EtherInput
        value={value}
        onChange={val => setValue(val)}
        {...props}
        width="300px"
      />
      <Text>Value: {value} wei</Text>
    </>
  );
};

export const Ether = () => <Component unit="ether" />;
export const Wei = () => <Component unit="wei" />;
export const Label = () => <Component label="Enter value in wei" />;
export const Error = () => <Component error="This is an error" />;
