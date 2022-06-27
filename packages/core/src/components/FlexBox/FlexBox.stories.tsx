import type { Meta, Story } from '@storybook/react'
import styled from '@robin-ui/styles'

import { FlexBox, type Props } from './FlexBox'
import { Paper } from '../Paper'

export default {
  title: 'Layout/FlexBox',
  component: FlexBox,
  args: {
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    spacing: 'md'
  },
  argTypes: {
    direction: { control: { type: 'text' } },
    justifyContent: { control: { type: 'text' } },
    alignItems: { control: { type: 'text' } },
    spacing: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

const Element = styled(Paper)({
  width: '10rem',
  height: '10rem'
})

export const Default: Story<Props> = args => (
  <FlexBox {...args}>
    <Element variant="flat">1</Element>
    <Element variant="flat">2</Element>
    <Element variant="flat">3</Element>
  </FlexBox>
)
