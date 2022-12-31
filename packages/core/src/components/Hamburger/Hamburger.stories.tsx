import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { Hamburger, type Props } from './Hamburger'

export default {
  title: 'Navigation/Hamburger',
  component: Hamburger,
  args: {
    open: false,
    size: 'md',
    radius: 'sm'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
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
