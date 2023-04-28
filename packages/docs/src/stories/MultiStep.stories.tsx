import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@leucotron-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
    color: '$blue200',
  },
  argTypes: {
    color: {
      options: [
        '$blue100',
        '$blue200',
        '$blue400',
        '$blue600',
        '$blue800',
        '$blue900',
        '$blue950',
        '$stone600',
        '$stone950',
      ],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            backgroundColor: '$blue950',
            borderColor: '$blue900',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
