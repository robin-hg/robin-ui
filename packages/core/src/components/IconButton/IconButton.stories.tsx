import type { Meta, StoryFn } from '@storybook/react'

import { Settings } from '@robin-ui/icons'

import { IconButton, type Props } from './IconButton'

export default {
  title: 'Inputs/IconButton',
  component: IconButton,
  args: {
    children: <Settings />,
    size: 'md',
    radius: 'sm',
    variant: 'filled',
    color: 'primary'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <IconButton {...args} />
