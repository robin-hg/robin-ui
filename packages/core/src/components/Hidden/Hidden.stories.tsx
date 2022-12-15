import type { Meta, StoryFn } from '@storybook/react'

import { Paper } from '../Paper'

import { Hidden, type Props } from './Hidden'

export default {
  title: 'Layout/Hidden',
  component: Hidden,
  args: {
    breakpoint: 'sm',
    direction: 'down'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Hidden {...args}>
    <Paper variant="flat">Hidden on {args.breakpoint}</Paper>
  </Hidden>
)
