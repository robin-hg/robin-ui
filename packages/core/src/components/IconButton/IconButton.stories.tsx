import type { Meta, Story } from '@storybook/react'

import { IconButton, type Props } from './IconButton'
import { Settings } from '@robin-ui/icons'

export default {
  title: 'Inputs/IconButton',
  component: IconButton,
  args: {
    children: <Settings />,
    size: 'md',
    radius: 'sm',
    variant: 'filled',
    color: 'primary'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => <IconButton {...args} />
