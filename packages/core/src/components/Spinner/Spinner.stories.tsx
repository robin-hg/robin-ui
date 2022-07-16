import type { Meta, Story } from '@storybook/react'
import { Loader } from '@robin-ui/icons'

import { type Props, Spinner } from './Spinner'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  args: {
    color: 'primary',
    size: 'md'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => <Spinner {...args} />

export const Custom: Story<Props> = args => (
  <Spinner {...args}>
    <Loader />
  </Spinner>
)
