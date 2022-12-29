import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { type Props, Slider } from './Slider'

export default {
  title: 'Inputs/Slider',
  component: Slider,
  args: {
    value: 0
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <Slider
      {...args}
      onChange={newValue => {
        args.onChange?.(newValue)
        updateArgs({ value: newValue })
      }}
    />
  )
}
