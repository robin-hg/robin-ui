import type { Meta, Story } from '@storybook/react'

import { Paper } from '../Paper'

import { ClickAwayListener, type Props } from './ClickAwayListener'

export default {
  title: 'Utils/ClickAwayListener',
  component: ClickAwayListener
} as Meta<Props>

export const Default: Story<Props> = args => (
  <Paper>
    Outside
    <ClickAwayListener {...args}>
      <Paper>Inside</Paper>
    </ClickAwayListener>
  </Paper>
)
