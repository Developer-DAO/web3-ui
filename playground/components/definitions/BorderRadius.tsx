// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Text, Container, Box } from '@web3-ui/components';

export const BorderRadius = () => {
  return (
    <div className={`section`}>
      <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
        borderRadius
      </Text>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Text size={`xl`} as={`p`}>
            borderRadius: sm (0.125rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$sm',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: DEFAULT (0.25rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$DEFAULT',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: md (0.375rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$md',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: lg (0.5rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$lg',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: xl (0.75rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$xl',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: '2xl' (1rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$2xl',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: '3xl' (1.5rem)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$3xl',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: full (50%)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$full',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
          <Text size={`xl`} as={`p`}>
            borderRadius: pill (9999px)
          </Text>
          <Box
            p={3}
            css={{
              border: '2',
              borderRadius: '$pill',
              height: '50px',
              width: '100px',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: '2px',
              backgroundColor: 'gray',
            }}
          />
        </Container>
      </div>
    </div>
  );
};
