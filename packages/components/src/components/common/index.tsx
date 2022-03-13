import { styled } from '@stitches/react';

export const Flex = styled('div', {
  display: 'flex',
});

export const HStack = styled(Flex, {
  flexDirection: 'row',
});

export const VStack = styled(Flex, {
  flexDirection: 'column',
});

export const Tag = styled('div', {
  backgroundColor: '#eaeaea',
  borderRadius: '7px',
  padding: '0.5rem',
});

export const Grid = styled('div', {
  display: 'grid',
});

export const AlertBox = styled('div', {
  border: '1px solid red',
  padding: '1rem',
  borderRadius: '7px',
});
