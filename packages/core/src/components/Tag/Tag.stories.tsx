import type { Meta, StoryFn } from '@storybook/react'

import { type Props, Tag } from './Tag'

export default {
  title: 'Display/Tag',
  component: Tag,
  args: {
    variant: 'outlined',
    size: 'md',
    radius: 'sm',
    color: 'primary',
    children: 'I am a Tag'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Tag {...args} />
