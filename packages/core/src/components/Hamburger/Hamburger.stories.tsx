import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Hamburger, type Props } from './Hamburger'

export default {
  title: 'Navigation/Hamburger',
  component: Hamburger,
  args: {
    open: false,
    size: 'md',
    radius: 'sm'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <Hamburger
      {...args}
      onClick={event => {
        args.onChange?.(event)
        updateArgs({ open: !args.open })
      }}
    />
  )
}
