import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue600',

        '&:not(:disabled):hover': {
          background: '$blue800',
        },

        '&:disabled': {
          backgroundColor: '$stone600',
        },
      },

      secondary: {
        color: '$blue800',
        border: '2px solid $blue900',

        '&:not(:disabled):hover': {
          background: '$blue950',
          color: '$white',
        },

        '&:disabled': {
          color: '$stone600',
          borderColor: '$stone950',
        },
      },

      tertiary: {
        color: '$blue950',

        '&:not(:disabled):hover': {
          color: '$blue600',
        },

        '&:disabled': {
          color: '$stone600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
