import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

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
} as Meta<Props>

export const Default: Story<Props> = args => {
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
