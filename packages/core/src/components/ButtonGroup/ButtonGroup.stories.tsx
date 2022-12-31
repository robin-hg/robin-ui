import type { Meta, StoryFn } from '@storybook/react'

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
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <ButtonGroup {...args}>
    <Button>A</Button>
    <Button>B</Button>
    <Button>C</Button>
  </ButtonGroup>
)
