import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { type Props, Radio } from './Radio'

export default {
  title: 'Inputs/Radio',
  component: Radio,
  args: {
    label: 'Label',
    checked: false
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <Radio
      {...args}
      onChange={event => {
        args.onChange?.(event)
        updateArgs({ checked: event.target.checked })
      }}
    />
  )
}
