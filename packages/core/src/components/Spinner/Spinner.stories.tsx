import type { Meta, StoryFn } from '@storybook/react'

import { Loader } from '@robin-ui/icons'

import { type Props, Spinner } from './Spinner'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  args: {
    color: 'primary',
    size: 'md'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Spinner {...args} />

export const Custom: StoryFn<Props> = args => (
  <Spinner {...args}>
    <Loader />
  </Spinner>
)
