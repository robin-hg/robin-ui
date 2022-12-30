import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { NumericInput, type Props } from './NumericInput'

export default {
  title: 'Inputs/NumericInput',
  component: NumericInput,
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
    <NumericInput
      {...args}
      onChange={values => {
        args.onChange?.(values)
        updateArgs({ value: values.value })
      }}
    />
  )
}
