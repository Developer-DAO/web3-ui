// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Container } from '@web3-ui/components';

export const FontWeight = () => {
  return (
    <div className={`section`}>
      <h2 className={`section-title`}>fontWeight</h2>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Text size={`lg`} weight={`thin`} css={{ lineHeight: '1.5em' }}>
            fontWeight: thin (100)
          </Text>
          <Text size={`lg`} weight={`extralight`} css={{ lineHeight: '1.5em' }}>
            fontWeight: extralight (200)
          </Text>
          <Text size={`lg`} weight={`light`} css={{ lineHeight: '1.5em' }}>
            fontWeight: light (300)
          </Text>
          <Text size={`lg`} weight={`normal`} css={{ lineHeight: '1.5em' }}>
            fontWeight: normal (400)
          </Text>
          <Text size={`lg`} weight={`medium`} css={{ lineHeight: '1.5em' }}>
            fontWeight: medium (500)
          </Text>
          <Text size={`lg`} weight={`semibold`} css={{ lineHeight: '1.5em' }}>
            fontWeight: semibold (600)
          </Text>
          <Text size={`lg`} weight={`bold`} css={{ lineHeight: '1.5em' }}>
            fontWeight: bold (700)
          </Text>
          <Text size={`lg`} weight={`extrabold`} css={{ lineHeight: '1.5em' }}>
            fontWeight: extrabold (800)
          </Text>
          <Text size={`lg`} weight={`black`} css={{ lineHeight: '1.5em' }}>
            fontWeight: black (900)
          </Text>
        </Container>
      </div>
    </div>
  );
};
