import type { Meta, Story } from '@storybook/react'

import { Breadcrumbs, type Props } from './Breadcrumbs'
import { Link } from '../Link'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    separator: '/',
    spacing: 'md'
  },
  argTypes: {
    separator: { control: { type: 'text' } },
    spacing: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => (
  <Breadcrumbs {...args}>
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
  </Breadcrumbs>
)
