import type { Story, Meta } from '@storybook/react'

import { Badge, type Props } from './Badge'
import { Paper } from '../Paper'

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

export const Default: Story<Props> = args => (
  <Badge {...args}>
    <Paper variant="flat" sx={{ width: '4rem', height: '4rem' }} />
  </Badge>
)
