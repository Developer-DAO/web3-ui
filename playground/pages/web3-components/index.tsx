import type { NextPage } from 'next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Address } from '@web3-ui/components';

const Web3ComponentsPage: NextPage = () => {
  return (
    <main>
      <div className={`section`}>
        <h2 className={`section-title`}>Components</h2>
        <div className={`item`}>
          <h3 className={`item-title`}>Address</h3>
          <Address
            value="0x0000000000000000000000000000000000000000"
            copiable
          />
        </div>
      </div>
    </main>
  );
};

export default Web3ComponentsPage;
