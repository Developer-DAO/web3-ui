import { styled } from '../theme/baseTheme';

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  // Custom
  fontFamily: '$sans',
  fontSize: '$base',

  variants: {
    size: {
      '1': {
        fontSize: '$base',
      },
      '2': {
        fontSize: '$lg',
      },
      '3': {
        fontSize: '$xl',
      },
    },
  },

  defaultVariants: {
    size: '1',
  },
});
