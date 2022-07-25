import type { NextPage } from 'next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Address } from '@web3-ui/components';

const Web3ComponentsPage: NextPage = () => {
  return (
    <main>
      <div className={`section`}>
        <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
          Components
        </Text>
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Address
          </Text>
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
