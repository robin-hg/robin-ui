import type { Meta, StoryFn } from '@storybook/react'

import { Paper } from '../Paper'
import { Stack } from '../Stack'

import { FocusTrap, type Props } from './FocusTrap'

export default {
  title: 'Utils/FocusTrap',
  component: FocusTrap
} as Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Stack>
    <FocusTrap {...args}>
      <Paper variant="flat" sx={{ padding: '2rem' }}>
        <p>Once this section is focused</p>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
      </Paper>
    </FocusTrap>
    <Paper variant="flat" sx={{ padding: '2rem' }}>
      <p>This input cannot be focused by pressing Tab</p>
      <input />
    </Paper>
  </Stack>
)
