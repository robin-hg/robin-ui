import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Paper } from '../Paper'
import { Switch } from '../Switch'

import {
  Collapse as CollapseTransition,
  Fade as FadeTransition,
  Grow as GrowTransition,
  type Props
} from './Transition'

export default {
  title: 'Utils/Transitions',
  component: FadeTransition,
  args: {
    in: false,
    ease: 'ease-out',
    duration: 200
  },
  argTypes: {
    ease: {
      control: 'select',
      options: ['linear', 'ease-in', 'ease-out', 'ease-in-out']
    }
  }
} as Meta<Props>

export const Fade: Story<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <Switch
        label="Toggle"
        checked={args.in}
        onChange={event => updateArgs({ in: event.target.checked })}
      />
      <FadeTransition {...args}>
        <Paper variant="flat">Content</Paper>
      </FadeTransition>
    </>
  )
}

export const Collapse: Story<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <Switch
        label="Toggle"
        checked={args.in}
        onChange={event => updateArgs({ in: event.target.checked })}
      />
      <CollapseTransition {...args}>
        <Paper variant="flat">Content</Paper>
      </CollapseTransition>
    </>
  )
}

export const Grow: Story<Props> = args => {
  const [, updateArgs] = useArgs()

  return (
    <>
      <Switch
        label="Toggle"
        checked={args.in}
        onChange={event => updateArgs({ in: event.target.checked })}
      />
      <GrowTransition {...args}>
        <Paper variant="flat">Content</Paper>
      </GrowTransition>
    </>
  )
}
