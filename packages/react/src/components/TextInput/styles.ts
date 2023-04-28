import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $blue100',
  display: 'flex',
  alignItems: 'center',

  variants: {
    customSize: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$blue600',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    background: '$stone950',
  },

  defaultVariants: {
    customSize: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$blue950',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$stone950',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$stone600',
  },
})
