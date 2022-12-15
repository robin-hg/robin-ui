import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { type Props, TextInput } from './TextInput'

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Placeholder',
    value: ''
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <TextInput
      {...args}
      onChange={event => {
        args.onChange?.(event)
        updateArgs({ value: event.target.value })
      }}
    />
  )
}
