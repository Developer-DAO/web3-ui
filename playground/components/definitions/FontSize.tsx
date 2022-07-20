// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Container } from '@web3-ui/components';

export const FontSize = () => {
  return (
    <div className={`section`}>
      <h2 className={`section-title`}>Font Size</h2>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Text size="9xl" as="h1" css={{ lineHeight: '1em' }}>
            Font Size : 9xl
          </Text>
          <Text size="8xl" as="h2" css={{ lineHeight: '1em' }}>
            Font Size : 8xl
          </Text>
          <Text size="7xl" as="h3" css={{ lineHeight: '1.25em' }}>
            Font Size : 7xl
          </Text>
          <Text size="6xl" as="p" css={{ lineHeight: '1.5 em' }}>
            Font Size : 6xl
          </Text>
          <Text size="5xl" as="p" css={{ lineHeight: '1.5em' }}>
            Font Size : 5xl
          </Text>
          <Text size="4xl" as="p" css={{ lineHeight: '1.5em' }}>
            Font Size : 4xl
          </Text>
          <Text size="3xl" as="p" css={{ lineHeight: '1.5em' }}>
            Font Size : 3xl
          </Text>
          <Text size="2xl" as="p" css={{ lineHeight: '2em' }}>
            Font Size : 2xl
          </Text>
          <Text size="xl" as="p" css={{ lineHeight: '2em' }}>
            Font Size : xl
          </Text>
          <Text size="lg" as="p" css={{ lineHeight: '2em' }}>
            Font Size : lg
          </Text>
          <Text size="base" as="p" css={{ lineHeight: '2em' }}>
            Font Size : base
          </Text>
          <Text size="sm" as="p" css={{ lineHeight: '2em' }}>
            Font Size : sm
          </Text>
          <Text size="xs" as="p" css={{ lineHeight: '2em' }}>
            Font Size : xs
          </Text>
        </Container>
      </div>
    </div>
  );
};
