// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Container } from '@web3-ui/components';

export const BorderRadius = () => {
  return (
    <div className={`section`}>
      <h2 className={`section-title`}>Border Radius</h2>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            sm = 0.125rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            DEFAULT = 0.25rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            md = 0.375rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            lg = 0.5rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            xl = 0.75rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            '2xl' = 1rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            '3xl' = 1.5rem
          </Text>
          <Text size="xl" as="h1" css={{ lineHeight: '1.5em' }}>
            full = 9999px
          </Text>
        </Container>
      </div>
    </div>
  );
};
