import type { NextPage } from 'next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Badge } from '@web3-ui/components';

const Web3ComponentsPage: NextPage = () => {
  return (
    <main>
      <div className={`section`}>
        <h2 className={`section-title`}>Elements</h2>
        <div className={`item`}>
          <h3 className={`item-title`}>Button</h3>
          <Button>testing</Button>
        </div>
        <div className={`item`}>
          <h3 className={`item-title`}>Badge</h3>
          <Badge variant="lime">testing</Badge>
        </div>
      </div>
    </main>
  );
};

export default Web3ComponentsPage;
