// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Container } from '@web3-ui/components';

export const FontSize = () => {
  return (
    <div className={`section`}>
      <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
        fontSize
      </Text>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Text size={`9xl`} as={'h1'} css={{ lineHeight: '1em' }}>
            fontSize: 9xl (8rem)
          </Text>
          <Text size={`8xl`} as={`h2`} css={{ lineHeight: '1em' }}>
            fontSize: 8xl (6rem)
          </Text>
          <Text size={`7xl`} as={`h3`} css={{ lineHeight: '1.25em' }}>
            fontSize: 7xl (4.5rem)
          </Text>
          <Text size={`6xl`} as={`p`} css={{ lineHeight: '1.5 em' }}>
            fontSize: 6xl (3.75rem)
          </Text>
          <Text size={`5xl`} as={`p`} css={{ lineHeight: '1.5em' }}>
            fontSize: 5xl ( 3rem)
          </Text>
          <Text size={`4xl`} as={`p`} css={{ lineHeight: '1.5em' }}>
            fontSize: 4xl (2.25rem)
          </Text>
          <Text size={`3xl`} as={`p`} css={{ lineHeight: '1.5em' }}>
            fontSize: 3xl (1.875rem)
          </Text>
          <Text size={`2xl`} as={`p`} css={{ lineHeight: '2em' }}>
            fontSize: 2xl (1.5rem)
          </Text>
          <Text size={`xl`} as={`p`} css={{ lineHeight: '2em' }}>
            fontSize: xl (1.25rem)
          </Text>
          <Text size={`lg`} as={`p`} css={{ lineHeight: '2em' }}>
            fontSize: lg (1.125rem)
          </Text>
          <Text size={`base`} as={`p`} css={{ lineHeight: '2em' }}>
            fontSize: base (1rem)
          </Text>
          <Text size={`sm`} as={`p`} css={{ lineHeight: '2em' }}>
            fontSize: sm (0.875rem)
          </Text>
          <Text size={`xs`} as="p" css={{ lineHeight: '2em' }}>
            fontSize: xs (0.75rem)
          </Text>
        </Container>
      </div>
    </div>
  );
};
