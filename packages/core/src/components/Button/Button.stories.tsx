import type { Meta, StoryFn } from '@storybook/react'

import { Button, type Props } from './Button'

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'I am a button',
    size: 'md',
    radius: 'sm',
    variant: 'gradient',
    color: 'primary',
    gradient: { colors: ['#090979', '#00d4ff'], deg: 0 }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Button {...args} />
