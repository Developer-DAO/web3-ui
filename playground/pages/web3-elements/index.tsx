import type { NextPage } from 'next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Button, Badge } from '@web3-ui/components';

const Web3ComponentsPage: NextPage = () => {
  return (
    <main>
      <div className={`section`}>
        <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
          Elements
        </Text>
        <div className={`item`}>
          <Text
            size={`lg`}
            as={`p`}
            weight={'semibold'}
            css={{ padding: '$4' }}
          >
            Button
          </Text>
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
