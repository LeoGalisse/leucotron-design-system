import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
    color: {
      blue100: { color: '$blue100' },
      blue200: { color: '$blue200' },
      blue600: { color: '$blue600' },
      blue400: { color: '$blue400' },
      blue800: { color: '$blue800' },
      blue900: { color: '$blue900' },
      blue950: { color: '$blue950' },
      stone600: { color: '$stone600' },
      stone950: { color: '$stone950' },
    },
    lineHeight: {
      none: { lineHeight: '$none' },
      base: { lineHeight: '$base' },
      shorter: { lineHeight: '$shorter' },
      short: { lineHeight: '$short' },
      tall: { lineHeight: '$tall' },
    },
  },

  defaultVariants: {
    size: 'md',
    color: '$blue200',
    lineHeight: 'shorter',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
