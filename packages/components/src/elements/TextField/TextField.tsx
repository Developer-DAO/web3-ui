import { styled } from '../../theme/stitches.config';

export const TextField = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$gray50',
  boxShadow: 'inset 0 0 0 1px $colors$gray700',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow:
      'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue300',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow:
      'inset 0px 0px 0px 1px $colors$blue800, 0px 0px 0px 1px $colors$blue700',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700, inset 0 0 0 100px $colors$blue300',
    },
  },
  '&::placeholder': {
    color: '$gray700',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray800',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$gray600',
    },
  },
  '&:read-only': {
    backgroundColor: '$gray100',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$gray700',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$md',
        height: '$5',
        fontSize: '$lg',
        p: '$4',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '$md',
        height: '$6',
        fontSize: '$lg',
        px: '$6',
        lineHeight: '$sizes$6',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$gray900',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow:
            'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red7',
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$red700, 0px 0px 0px 1px $colors$red700',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green7',
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$green700, 0px 0px 0px 1px $colors$green700',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});
