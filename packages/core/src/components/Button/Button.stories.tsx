import type { Meta, Story } from '@storybook/react'

import { Button, type Props } from './Button'

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'I am a button',
    size: 'md',
    radius: 'sm',
    variant: 'filled',
    color: 'primary'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: { control: { type: 'text' } }
  }
} as Meta<Props>

export const Default: Story<Props> = args => <Button {...args} />
