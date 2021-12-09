import React from 'react';
import { ConvertTokenInput } from '.';

export default {
  title: 'Components/ConvertTokenInput',
  component: ConvertTokenInput,
};

const Component = ({ ...props }) => {
  const [value, setValue] = React.useState('');
  return (
    <>
      <ConvertTokenInput value={value} {...props} />
    </>
  );
};

export const Default = () => <Component />;
