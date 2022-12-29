import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

import { Radio } from '../Radio'

import { type Props, RadioGroup } from './RadioGroup'

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  args: {
    value: 'react'
  },
  argTypes: {
    value: { control: { type: 'text' } }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <RadioGroup
      {...args}
      onChange={value => {
        args.onChange?.(value)
        updateArgs({ value })
      }}>
      <Radio value="react" label="React" />
      <Radio value="vue" label="Vue" />
      <Radio value="svelte" label="Svelte" />
    </RadioGroup>
  )
}
