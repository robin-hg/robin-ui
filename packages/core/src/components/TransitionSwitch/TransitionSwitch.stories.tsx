import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import { Paper } from '../Paper'

import { type Props, TransitionSwitch } from './TransitionSwitch'

export default {
  title: 'Utils/TransitionSwitch',
  component: TransitionSwitch,
  args: {
    type: 'fade',
    duration: 400
  },
  argTypes: {
    currentKey: { table: { disable: true } }
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
  const [page, setPage] = useState(0)
  return (
    <TransitionSwitch {...args} currentKey={page}>
      <Paper
        onClick={() => setPage((page + 1) % 3)}
        variant="flat"
        sx={{ width: '100%', height: '10rem' }}>
        Page {page + 1}
      </Paper>
    </TransitionSwitch>
  )
}
