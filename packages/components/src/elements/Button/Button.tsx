import { styled } from '../../theme/stitches.config';

export const Button = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  cursor: 'pointer',

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  px: '$2',
  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: 600,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$gray200',
    boxShadow: 'inset 0 0 0 1px $colors$gray300',
    color: '$gray800',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      md: {
        borderRadius: '$md',
        py: '$2',
        px: '$3',
        fontSize: '$base',
        lineHeight: '$sizes$5',
      },
      lg: {
        borderRadius: '$lg',
        py: '$2',
        px: '$3',
        fontSize: '$lg',
        lineHeight: '$sizes$6',
      },
      xl: {
        borderRadius: '$xl',
        py: '$3',
        px: '$4',
        fontSize: '$xl',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      gray: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$gray700',
        color: '$gray800',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$gray800',
          },
        },
        '&:active': {
          backgroundColor: '$gray200',
          boxShadow: 'inset 0 0 0 1px $colors$gray800',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$gray800, 0 0 0 1px $colors$gray800',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$gray4',
            boxShadow: 'inset 0 0 0 1px $colors$gray800',
          },
      },
      white: {
        backgroundColor: '$white',
        boxShadow: 'inset 0 0 0 1px $colors$gray700',
        color: '$gray800',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$gray700',
          },
        },
        '&:active': {
          backgroundColor: '$gray400',
          boxShadow: 'inset 0 0 0 1px $colors$gray700',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$gray400',
            boxShadow: 'inset 0 0 0 1px $colors$gray700',
          },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'gray',
  },
});
