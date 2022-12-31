import type { Meta, StoryFn } from '@storybook/react'

import { GridItem } from '../GridItem'
import { Paper } from '../Paper'

import { Grid, type Props } from './Grid'

export default {
  title: 'Layout/Grid',
  component: Grid,
  args: {
    columns: 12,
    spacing: 'md'
  },
  argTypes: {
    columns: { control: 'number' }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Grid {...args}>
    <GridItem span={4}>
      <Paper sx={{ height: '20rem' }}>span=4</Paper>
    </GridItem>
    <GridItem span={4}>
      <Paper sx={{ height: '20rem' }}>span=4</Paper>
    </GridItem>
    <GridItem span={4}>
      <Paper sx={{ height: '20rem' }}>span=4</Paper>
    </GridItem>
    <GridItem span={3}>
      <Paper sx={{ height: '20rem' }}>span=3</Paper>
    </GridItem>
    <GridItem span={3}>
      <Paper sx={{ height: '20rem' }}>span=3</Paper>
    </GridItem>
    <GridItem span={3}>
      <Paper sx={{ height: '20rem' }}>span=3</Paper>
    </GridItem>
    <GridItem span={3}>
      <Paper sx={{ height: '20rem' }}>span=3</Paper>
    </GridItem>
  </Grid>
)
