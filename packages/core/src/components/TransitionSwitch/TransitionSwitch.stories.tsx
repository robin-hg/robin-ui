import { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

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
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
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
