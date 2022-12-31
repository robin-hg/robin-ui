import type { Meta, StoryFn } from '@storybook/react'

import { Link } from '../Link'

import { Breadcrumbs, type Props } from './Breadcrumbs'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    separator: '/',
    spacing: 'md'
  },
  argTypes: {
    separator: { control: { type: 'text' } }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Breadcrumbs {...args}>
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
  </Breadcrumbs>
)
