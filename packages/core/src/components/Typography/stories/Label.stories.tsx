import type { Meta, StoryFn } from '@storybook/react'

import { useTheme } from '@robin-ui/hooks'

import { Stack } from '../../Stack'
import { Label, type Props } from '../Typography'

export default {
  title: 'Typography/Label',
  component: Label,
  args: {
    size: 'md',
    color: 'inherit',
    fontWeight: 600,
    children: 'Lorem ipsum'
  },
  argTypes: {
    fontWeight: { control: { type: 'select' }, options: [400, 600] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Label {...args} />

const List = () => {
  const theme = useTheme()
  return (
    <Stack>
      <Label size="lg">Label - Size lg ({theme.typography.label.fontSize.lg})</Label>
      <Label size="md">Label - Size md ({theme.typography.label.fontSize.md})</Label>
      <Label size="sm">Label - Size sm ({theme.typography.label.fontSize.sm})</Label>
    </Stack>
  )
}
export const Sizes = () => <List />
