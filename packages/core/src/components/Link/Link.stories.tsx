import type { Meta, StoryFn } from '@storybook/react'

import { Link, type Props } from './Link'

export default {
  title: 'Navigation/Link',
  component: Link,
  args: {
    children: 'I am a link',
    size: 'md',
    color: 'primary',
    underline: true
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Link href="#" {...args} />
