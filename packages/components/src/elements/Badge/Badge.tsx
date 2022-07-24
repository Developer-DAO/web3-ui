import { styled } from '@stitches/react';

export const Badge = styled('span', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$slate3',
    pointerEvents: 'none',
    color: '$slate8',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  // Custom
  backgroundColor: '$slate3',
  borderRadius: '$pill',
  color: '$slate11',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  paddingLeft: '$2',
  paddingRight: '$2',
  paddingTop: '$1',
  paddingBottom: '$1',

  variants: {
    variant: {
      red: {
        color: '$red11',
        backgroundColor: '$red3',
      },
      crimson: {
        color: '$crimson11',
        backgroundColor: '$crimson3',
      },
      pink: {
        color: '$pink11',
        backgroundColor: '$pink3',
      },
      purple: {
        color: '$purple11',
        backgroundColor: '$purple3',
      },
      violet: {
        color: '$violet11',
        backgroundColor: '$violet3',
      },
      indigo: {
        color: '$indigo11',
        backgroundColor: '$indigo3',
      },
      blue: {
        color: '$blue11',
        backgroundColor: '$blue3',
      },
      cyan: {
        color: '$cyan11',
        backgroundColor: '$cyan3',
      },
      teal: {
        color: '$teal11',
        backgroundColor: '$teal3',
      },
      green: {
        color: '$green11',
        backgroundColor: '$green3',
      },
      lime: {
        color: '$lime11',
        backgroundColor: '$lime3',
      },
      yellow: {
        color: '$yellow11',
        backgroundColor: '$yellow3',
      },
      orange: {
        color: '$orange11',
        backgroundColor: '$orange3',
      },
      gold: {
        color: '$gold11',
        backgroundColor: '$gold3',
      },
      bronze: {
        color: '$bronze11',
        backgroundColor: '$bronze3',
      },
      gray: {
        color: '$slate11',
        backgroundColor: '$slate3',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
  },
});
