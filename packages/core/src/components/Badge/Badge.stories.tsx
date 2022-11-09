import type { Meta, StoryFn } from '@storybook/react'

import { Paper } from '../Paper'

import { Badge, type Props } from './Badge'

export default {
  title: 'Display/Badge',
  component: Badge,
  args: {
    position: 'top-end',
    color: 'primary',
    size: 'md',
    content: '3'
  },
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top-start', 'top-end', 'bottom-start', 'bottom-end']
    },
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Badge {...args}>
    <Paper variant="flat" sx={{ width: '4rem', height: '4rem' }} />
  </Badge>
)
