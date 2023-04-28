import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
    lineHeight: {
      base: { lineHeight: '$base' },
      none: { lineHeight: '$none' },
      shorter: { lineHeight: '$shorter' },
      short: { lineHeight: '$short' },
      tall: { lineHeight: '$tall' },
    },
    fontWeight: {
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      bold: { fontWeight: '$bold' },
    },
    color: {
      blue100: { color: '$blue100' },
      blue200: { color: '$blue200' },
      blue400: { color: '$blue400' },
      blue600: { color: '$blue600' },
      blue800: { color: '$blue800' },
      blue900: { color: '$blue900' },
      blue950: { color: '$blue950' },
      stone600: { color: '$stone600' },
      stone950: { color: '$stone950' },
    },
  },

  defaultVariants: {
    size: 'md',
    lineHeight: 'base',
    fontWeight: 'regular',
    color: 'blue200',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
