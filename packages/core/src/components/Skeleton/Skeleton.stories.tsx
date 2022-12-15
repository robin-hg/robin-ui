import type { Meta, StoryFn } from '@storybook/react'

import { type Props, Skeleton } from './'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {
    radius: 'sm',
    animated: true,
    loading: true
  },
  argTypes: {
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Skeleton {...args}>Loading complete</Skeleton>
