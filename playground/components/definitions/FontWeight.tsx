// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Container } from '@web3-ui/components';

export const FontWeight = () => {
  return (
    <div className={`section`}>
      <h2 className={`section-title`}>Font Weight</h2>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Text size="lg" weight="thin" css={{ lineHeight: '1.5em' }}>
            Font Weight : thin
          </Text>
          <Text size="lg" weight="extralight" css={{ lineHeight: '1.5em' }}>
            Font Weight : extralight
          </Text>
          <Text size="lg" weight="light" css={{ lineHeight: '1.5em' }}>
            Font Weight : light
          </Text>
          <Text size="lg" weight="normal" css={{ lineHeight: '1.5em' }}>
            Font Weight : normal
          </Text>
          <Text size="lg" weight="medium" css={{ lineHeight: '1.5em' }}>
            Font Weight : medium
          </Text>
          <Text size="lg" weight="semibold" css={{ lineHeight: '1.5em' }}>
            Font Weight : semibold
          </Text>
          <Text size="lg" weight="bold" css={{ lineHeight: '1.5em' }}>
            Font Weight : bold
          </Text>
          <Text size="lg" weight="extrabold" css={{ lineHeight: '1.5em' }}>
            Font Weight : extrabold
          </Text>
          <Text size="lg" weight="black" css={{ lineHeight: '1.5em' }}>
            Font Weight : black
          </Text>
        </Container>
      </div>
    </div>
  );
};
