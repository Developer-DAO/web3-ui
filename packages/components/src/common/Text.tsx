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
    // '3xl':
    // '4xl':
    // '5xl':
    // '6xl': '3.75rem',
    // '7xl': '4.5rem',
    // '8xl': '6rem',
    // '9xl': '8rem',
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      base: {
        fontSize: '$base',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '3xl': {
        fontSize: '$sm',
      },
      '4xl': {
        fontSize: '$base',
      },
      '5xl': {
        fontSize: '$lg',
      },
      '6xl': {
        fontSize: '$xl',
      },
      '7xl': {
        fontSize: '$2xl',
      },
      '8xl': {
        fontSize: '$8xl',
      },
      '9xl': {
        fontSize: '$9xl',
      },
    },
    variant: {
      red: {
        color: '$red11',
      },
      crimson: {
        color: '$crimson11',
      },
      pink: {
        color: '$pink11',
      },
      purple: {
        color: '$purple11',
      },
      violet: {
        color: '$violet11',
      },
      indigo: {
        color: '$indigo11',
      },
      blue: {
        color: '$blue11',
      },
      cyan: {
        color: '$cyan11',
      },
      teal: {
        color: '$teal11',
      },
      green: {
        color: '$green11',
      },
      lime: {
        color: '$lime11',
      },
      yellow: {
        color: '$yellow11',
      },
      orange: {
        color: '$orange11',
      },
      gold: {
        color: '$gold11',
      },
      bronze: {
        color: '$bronze11',
      },
      gray: {
        color: '$slate11',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: '1base',
    variant: 'gray',
  },
});
