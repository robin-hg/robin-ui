import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { type Props, Select } from './Select'

export default {
  title: 'Inputs/Select',
  component: Select,
  args: {
    value: '',
    placeholder: 'Placeholder',
    options: [
      { value: 'A' },
      { value: 'B', disabled: true },
      { value: 'C' },
      { value: 'D' },
      { value: 'E' },
      { value: 'F' },
      { value: 'G' },
      { value: 'H' },
      { value: 'I' },
      { value: 'J' },
      { value: 'K' }
    ]
  },
  argTypes: {
    value: { control: { type: 'text' } }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <Select
      {...args}
      onChange={newValue => {
        args.onChange?.(newValue)
        updateArgs({ value: newValue })
      }}
    />
  )
}
