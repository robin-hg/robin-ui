import type { Meta, Story } from '@storybook/react'

import { Link, type Props } from './Link'

export default {
  title: 'Navigation/Link',
  component: Link,
  args: {
    children: 'I am a link',
    size: 'md',
    color: 'primary',
    underline: true
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => <Link href="#" {...args} />
