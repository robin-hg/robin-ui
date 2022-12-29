import type { Meta, StoryFn } from '@storybook/react'

import { useTheme } from '@robin-ui/hooks'

import { Stack } from '../../Stack'
import { Heading, type Props } from '../Typography'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    color: 'inherit',
    fontWeight: 400,
    children: 'Lorem ipsum'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    highlight: { control: { type: 'color' } },
    fontWeight: { control: { type: 'select' }, options: [400, 700] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Heading {...args} />

const List = () => {
  const theme = useTheme()
  return (
    <Stack>
      <Heading size="xl">
        Heading<small> - Size xl ({theme.typography.heading.fontSize.xl})</small>
      </Heading>
      <Heading size="lg">
        Heading<small> - Size lg ({theme.typography.heading.fontSize.lg})</small>
      </Heading>
      <Heading size="md">
        Heading<small> - Size md ({theme.typography.heading.fontSize.md})</small>
      </Heading>
      <Heading size="sm">
        Heading<small> - Size sm ({theme.typography.heading.fontSize.sm})</small>
      </Heading>
      <Heading size="xs">
        Heading<small> - Size xs ({theme.typography.heading.fontSize.xs})</small>
      </Heading>
    </Stack>
  )
}
export const Sizes = () => <List />
