import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { NumberInput, type Props } from './NumberInput'

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput,
  args: {
    placeholder: 'Placeholder',
    value: ''
  },
  argTypes: {
    value: { control: { type: 'text' } }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <NumberInput
      {...args}
      onChange={values => {
        args.onChange?.(values)
        updateArgs({ value: values.value })
      }}
    />
  )
}
