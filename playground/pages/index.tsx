import Head from 'next/head';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text } from '@web3-ui/components';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>web3-ui dev playground</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <div className={`section`}>
          <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
            Resources
          </Text>
          <div className={`item`}>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://stitches.dev/docs/installation"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                stitches docs
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://github.com/stitchesjs/stitches"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                stitches github
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=Gw28VgyKGkw"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                stitches video overview
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://design-system.modulz-deploys.com/"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                Radix design system modulz
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://github.com/radix-ui/design-system"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                Radix design system modulz github
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://wagmi.sh/"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                wagmi docs
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://github.com/wagmi-dev/wagmi"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                wagmi github
              </a>
            </div>
          </div>
        </div>
        <div className={`section`}>
          <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
            Inspiration
          </Text>
          <div className={`item`}>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://nextui.org/"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                nextui
              </a>
            </div>
            <div style={{ padding: '1em 0em' }}>
              <a
                target="_blank"
                href="https://www.npmjs.com/package/web3uikit"
                rel="noopener noreferrer"
                className={`item-link`}
              >
                web3uikit
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
