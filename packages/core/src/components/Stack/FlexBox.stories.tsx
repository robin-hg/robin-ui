import type { Meta, Story } from '@storybook/react'
import styled from '@robin-ui/styles'

import { Paper } from '../Paper'

import { type Props, Stack } from './Stack'

export default {
  title: 'Layout/Stack',
  component: Stack,
  args: {
    spacing: 'md',
    direction: 'column'
  },
  argTypes: {
    spacing: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

const Element = styled(Paper)({
  width: '100%',
  height: '10rem'
})

export const Default: Story<Props> = args => (
  <Stack {...args}>
    <Element variant="flat">1</Element>
    <Element variant="flat">2</Element>
    <Element variant="flat">3</Element>
  </Stack>
)
