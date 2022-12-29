import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { Checkbox, type Props } from './Checkbox'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    label: 'Label',
    checked: false,
    indeterminate: false
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <Checkbox
      {...args}
      onChange={event => {
        args.onChange?.(event)
        updateArgs({ checked: event.target.checked })
      }}
    />
  )
}
