import type { Meta, Story } from '@storybook/react'

import { Paper } from '../Paper'

import { Hidden, type Props } from './Hidden'

export default {
  title: 'Layout/Hidden',
  component: Hidden,
  args: {
    breakpoint: 'sm',
    direction: 'down'
  }
} as Meta<Props>

export const Default: Story<Props> = args => (
  <Hidden {...args}>
    <Paper variant="flat">Hidden on {args.breakpoint}</Paper>
  </Hidden>
)
