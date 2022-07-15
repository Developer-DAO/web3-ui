import React from 'react';
import { Address } from '@web3-ui/components';

export const AddressExample = () => {
  return (
    <div>
      <Address value={'dhai.eth'} copiable ens={false} shortened />
    </div>
  );
};
