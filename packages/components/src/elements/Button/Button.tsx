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
      primary: {
        backgroundColor: '$primary600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$primary700',
          },
        },
        '&:active': {
          backgroundColor: '$primary800',
        },
        '&:focus': {},
      },
      secondary: {
        backgroundColor: '$secondary600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondary700',
          },
        },
        '&:active': {
          backgroundColor: '$secondary800',
        },
        '&:focus': {},
      },
      success: {
        backgroundColor: '$success600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$success700',
          },
        },
        '&:active': {
          backgroundColor: '$success800',
        },
        '&:focus': {},
      },
      danger: {
        backgroundColor: '$danger600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$danger700',
          },
        },
        '&:active': {
          backgroundColor: '$danger800',
        },
        '&:focus': {},
      },
      warning: {
        backgroundColor: '$warning600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$warning700',
          },
        },
        '&:active': {
          backgroundColor: '$warning800',
        },
        '&:focus': {},
      },
      info: {
        backgroundColor: '$info600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$info700',
          },
        },
        '&:active': {
          backgroundColor: '$info800',
        },
        '&:focus': {},
      },
      neutral: {
        backgroundColor: '$neutral600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$neutral700',
          },
        },
        '&:active': {
          backgroundColor: '$neutral800',
        },
        '&:focus': {},
      },
      blue: {
        backgroundColor: '$blue600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue700',
          },
        },
        '&:active': {
          backgroundColor: '$blue800',
        },
        '&:focus': {},
      },
      cyan: {
        backgroundColor: '$cyan600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$cyan700',
          },
        },
        '&:active': {
          backgroundColor: '$cyan800',
        },
        '&:focus': {},
      },
      teal: {
        backgroundColor: '$teal600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$teal700',
          },
        },
        '&:active': {
          backgroundColor: '$teal800',
        },
        '&:focus': {},
      },
      green: {
        backgroundColor: '$green600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$green700',
          },
        },
        '&:active': {
          backgroundColor: '$green800',
        },
        '&:focus': {},
      },
      yellow: {
        backgroundColor: '$yellow600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$yellow700',
          },
        },
        '&:active': {
          backgroundColor: '$yellow800',
        },
        '&:focus': {},
      },
      orange: {
        backgroundColor: '$orange600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange700',
          },
        },
        '&:active': {
          backgroundColor: '$orange800',
        },
        '&:focus': {},
      },
      red: {
        backgroundColor: '$red600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$red700',
          },
        },
        '&:active': {
          backgroundColor: '$red800',
        },
        '&:focus': {},
      },
      purple: {
        backgroundColor: '$purple600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$purple700',
          },
        },
        '&:active': {
          backgroundColor: '$purple800',
        },
        '&:focus': {},
      },
      pink: {
        backgroundColor: '$pink600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$pink700',
          },
        },
        '&:active': {
          backgroundColor: '$pink800',
        },
        '&:focus': {},
      },

      gray: {
        backgroundColor: '$gray600',
        color: '$white',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray700',
          },
        },
        '&:active': {
          backgroundColor: '$gray800',
        },
        '&:focus': {},
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
    variant: 'primary',
  },
});
