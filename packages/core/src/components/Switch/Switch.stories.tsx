import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { type Props, Switch } from './Switch'

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    label: 'Label',
    labelPosition: 'right',
    checked: false
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <Switch
      {...args}
      onChange={event => {
        args.onChange?.(event)
        updateArgs({ checked: event.target.checked })
      }}
    />
  )
}
