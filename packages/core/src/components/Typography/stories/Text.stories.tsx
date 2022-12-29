import type { Meta, StoryFn } from '@storybook/react'

import { useTheme } from '@robin-ui/hooks'

import { Stack } from '../../Stack'
import { type Props, Text } from '../Typography'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    color: 'inherit',
    fontWeight: 400,
    children: 'Lorem ipsum'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    highlight: { control: { type: 'color' } },
    fontWeight: { control: { type: 'select' }, options: [400, 600] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Text {...args} />

const List = () => {
  const theme = useTheme()
  return (
    <Stack>
      <Text size="xl">
        Text<small> - Size xl ({theme.typography.text.fontSize.xl})</small>
      </Text>
      <Text size="lg">
        Text<small> - Size lg ({theme.typography.text.fontSize.lg})</small>
      </Text>
      <Text size="md">
        Text<small> - Size md ({theme.typography.text.fontSize.md})</small>
      </Text>
      <Text size="sm">
        Text<small> - Size sm ({theme.typography.text.fontSize.sm})</small>
      </Text>
      <Text size="xs">
        Text<small> - Size xs ({theme.typography.text.fontSize.xs})</small>
      </Text>
    </Stack>
  )
}
export const Sizes = () => <List />
