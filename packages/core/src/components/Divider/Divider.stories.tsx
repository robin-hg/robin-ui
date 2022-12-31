import type { Meta, StoryFn } from '@storybook/react'

import { sxc } from '@robin-ui/styles'

import { Divider, type Props } from './Divider'

export default {
  title: 'Layout/Divider',
  component: Divider,
  args: {
    thickness: 1,
    spacing: 'md',
    orientation: 'horizontal'
  },
  argTypes: {
    thickness: { control: { type: 'range', min: 1, max: 6, step: 1 } }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <sxc.div sx={{ height: 100 }}>
    Content
    <Divider {...args} />
    Content
  </sxc.div>
)
