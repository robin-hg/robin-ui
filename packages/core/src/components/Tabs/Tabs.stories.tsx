import type { Meta, StoryFn } from '@storybook/react'

import { TabPanel } from '../TabPanel'

import { type Props, Tabs } from './Tabs'

export default {
  title: 'Navigation/Tabs',
  subcomponents: { TabPanel },
  component: Tabs
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  return (
    <Tabs
      {...args}
      onChange={newValue => {
        args.onChange?.(newValue)
      }}>
      <TabPanel label="Panel 1">Panel 1</TabPanel>
      <TabPanel label="Panel 2">Panel 2</TabPanel>
      <TabPanel label="Panel 3" disabled>
        Panel 3
      </TabPanel>
      <TabPanel label="Panel 4">Panel 4</TabPanel>
      <TabPanel label="Panel 5">Panel 5</TabPanel>
    </Tabs>
  )
}
