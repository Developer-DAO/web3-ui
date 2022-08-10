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
      primary: {
        color: '$primary700',
      },
      secondary: {
        color: '$secondary700',
      },
      success: {
        color: '$success700',
      },
      danger: {
        color: '$danger700',
      },
      warning: {
        color: '$warning700',
      },
      info: {
        color: '$info700',
      },
      neutral: {
        color: '$neutral700',
      },
      blue: {
        color: '$blue700',
      },
      cyan: {
        color: '$cyan700',
      },
      gray: {
        color: '$gray700',
      },
      green: {
        color: '$green700',
      },
      orange: {
        color: '$orange700',
      },
      pink: {
        color: '$pink700',
      },
      purple: {
        color: '$purple700',
      },
      red: {
        color: '$red700',
      },
      yellow: {
        color: '$yellow700',
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
