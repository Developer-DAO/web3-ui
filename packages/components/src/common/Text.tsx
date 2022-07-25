import { styled } from '../theme/stitches.config';

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  // Custom
  fontFamily: '$sans',

  variants: {
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
        fontSize: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
      },
      '7xl': {
        fontSize: '$7xl',
      },
      '8xl': {
        fontSize: '$8xl',
      },
      '9xl': {
        fontSize: '$9xl',
      },
    },
    weight: {
      thin: {
        fontWeight: '$thin',
      },
      extralight: {
        fontWeight: '$extralight',
      },
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
      extrabold: {
        fontWeight: '$extrabold',
      },
      black: {
        fontWeight: '$black',
      },
    },
    spacing: {
      tighter: {
        letterSpacing: '$tighter',
      },
      tight: {
        letterSpacing: '$tight',
      },
      normal: {
        letterSpacing: '$normal',
      },
      wide: {
        letterSpacing: '$wide',
      },
      wider: {
        letterSpacing: '$wider',
      },
      widest: {
        letterSpacing: '$widest',
      },
    },
    height: {
      xs: {
        lineHeight: '$xs',
      },
      sm: {
        lineHeight: '$sm',
      },
      base: {
        lineHeight: '$base',
      },
      md: {
        lineHeight: '$md',
      },
      lg: {
        lineHeight: '$lg',
      },
      xl: {
        lineHeight: '$xl',
      },
      '2xl': {
        lineHeight: '$2xl',
      },
      '3xl': {
        lineHeight: '$3xl',
      },
      '4xl': {
        lineHeight: '$4xl',
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
    size: 'base',
    weight: 'normal',
    spacing: 'normal',
    height: 'base',
    variant: 'gray',
  },
});
