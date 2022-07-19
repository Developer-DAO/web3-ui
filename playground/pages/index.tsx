import Head from 'next/head';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Address, Button } from '@web3-ui/components';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>web3-ui dev playground</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <div className={`section`}>

          <h2 className={`section-title`}>Elements</h2>
          <div className={`item`}>
            <h3 className={`item-title`}>Button</h3>
            <Button>testing</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
