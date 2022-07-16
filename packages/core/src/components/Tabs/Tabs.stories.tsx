import type { Meta, Story } from '@storybook/react'

import { TabPanel } from '../TabPanel'

import { type Props, Tabs } from './Tabs'

export default {
  title: 'Navigation/Tabs',
  subcomponents: { TabPanel },
  component: Tabs
} as Meta<Props>

export const Default: Story<Props> = args => {
  return (
    <Tabs
      {...args}
      onChange={newValue => {
        args.onChange?.(newValue)
      }}>
      <TabPanel label="Panel 1">Panel 1</TabPanel>
      <TabPanel label="Panel 2">Panel 2</TabPanel>
    </Tabs>
  )
}
