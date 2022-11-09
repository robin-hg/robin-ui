import type { Meta, StoryFn } from '@storybook/react'
import { Minus, Plus } from '@robin-ui/icons'

import { ListItem } from '../ListItem'

import { List, type Props } from './List'

export default {
  title: 'Display/List',
  component: List,
  subcomponents: { ListItem }
} as Meta<Props>

export const Default: StoryFn<Props> = args => (
  <List {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
)

export const WithIcons: StoryFn<Props> = args => (
  <List {...args} marker={<Plus />}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem marker={<Minus />}>Item 3</ListItem>
  </List>
)
