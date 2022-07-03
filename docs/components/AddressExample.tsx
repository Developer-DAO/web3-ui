import React from 'react';
import { Address } from '@web3-ui/components';

export const AddressExample = () => {
  return (
    <div>
      {/* <div>this is address example</div> */}
      <Address value={'dhai.eth'} copiable ens={false} />
    </div>
  );
};
