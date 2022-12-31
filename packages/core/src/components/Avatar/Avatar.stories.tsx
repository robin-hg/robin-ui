import type { Meta, StoryFn } from '@storybook/react'

import { Avatar, type Props } from './Avatar'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    color: 'primary',
    size: 'lg',
    radius: 'xl',
    src: 'https://bit.ly/dan-abramov',
    alt: 'Dan Abramov'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Avatar {...args}>DA</Avatar>
