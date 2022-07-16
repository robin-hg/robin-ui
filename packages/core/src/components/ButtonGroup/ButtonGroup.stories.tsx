import type { Meta, Story } from '@storybook/react'

import { Button } from '../Button'

import { ButtonGroup, type Props } from './ButtonGroup'

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  args: {
    size: 'md',
    variant: 'outlined',
    color: 'primary',
    radius: 'sm'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => (
  <ButtonGroup {...args}>
    <Button>A</Button>
    <Button>B</Button>
    <Button>C</Button>
  </ButtonGroup>
)
