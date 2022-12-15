import type { Meta, StoryFn } from '@storybook/react'

import { Paper, type Props } from './Paper'

export default {
  title: 'Surface/Paper',
  component: Paper,
  args: {
    variant: 'elevated',
    surfaceColor: 'base',
    tint: 'tint',
    elevation: 1
  },
  argTypes: {
    elevation: { control: { type: 'range', min: 0, max: 24, step: 1 } },
    tint: { control: { type: 'color' } }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Paper
    {...args}
    sx={{
      width: '100%',
      height: '30rem'
    }}>
    Content
  </Paper>
)
