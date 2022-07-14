import Head from 'next/head';
import { Address, Button } from '@web3-ui/components';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>web3-ui dev playground</title>
        <meta name="description" content="" />
      </Head>
      <header
        style={{ marginBottom: '1em', fontSize: '2em', textAlign: 'center' }}
      >
        web3-ui dev playground
      </header>

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
