import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { PasswordInput, type Props } from './PasswordInput'

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
  args: {
    placeholder: 'Placeholder',
    value: 'Super Secret'
  }
} as Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <PasswordInput
      {...args}
      onChange={event => {
        args.onChange?.(event)
        updateArgs({ value: event.target.value })
      }}
    />
  )
}
