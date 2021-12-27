import React from 'react';
import { EtherInput } from '.';

export default {
  title: 'Components/EtherInput',
  component: EtherInput,
};

const Component = ({ ...props }) => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <EtherInput value={value} unit='wei' onChange={(e) => setValue(e.target.value)} {...props} />
    </>
  );
};

export const Default = () => <Component />;
export const Label = () => <Component label='Enter value in wei' />;
