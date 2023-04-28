import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@leucotron-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    lineHeight: 'base',
    fontWeight: 'regular',
    color: 'blue200',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    lineHeight: {
      options: ['none', 'shorter', 'short', 'base', 'tall'],
      control: {
        type: 'inline-radio',
      },
    },
    fontWeight: {
      options: ['regular', 'medium', 'bold'],
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
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
