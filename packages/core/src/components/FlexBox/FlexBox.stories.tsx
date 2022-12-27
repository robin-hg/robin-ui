import type { Meta, StoryFn } from '@storybook/react'
import { styled } from '@robin-ui/styles'

import { Paper } from '../Paper'

import { FlexBox, type Props } from './FlexBox'

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
} satisfies Meta<Props>

const Element = styled(Paper)({
  width: '10rem',
  height: '10rem'
})

export const Default: StoryFn<Props> = args => (
  <FlexBox {...args}>
    <Element variant="flat">1</Element>
    <Element variant="flat">2</Element>
    <Element variant="flat">3</Element>
  </FlexBox>
)
