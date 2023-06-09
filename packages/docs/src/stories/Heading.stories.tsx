import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@leucotron-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
    color: 'blue200',
    lineHeight: 'shorter',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: [
        'blue100',
        'blue200',
        'blue400',
        'blue600',
        'blue800',
        'blue900',
        'blue950',
        'stone600',
        'stone950',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    lineHeight: {
      options: ['none', 'base', 'shorter', 'short', 'tall'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
