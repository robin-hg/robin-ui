import type { Meta, StoryFn } from '@storybook/react'

import { useTheme } from '@robin-ui/hooks'

import { Stack } from '../../Stack'
import { Code, type Props } from '../Typography'

export default {
  title: 'Typography/Code',
  component: Code,
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

export const Default: StoryFn<Props> = args => <Code {...args} />

const List = () => {
  const theme = useTheme()
  return (
    <Stack>
      <Code size="xl">
        Code<small> - Size xl ({theme.typography.text.fontSize.xl})</small>
      </Code>
      <Code size="lg">
        Code<small> - Size lg ({theme.typography.text.fontSize.lg})</small>
      </Code>
      <Code size="md">
        Code<small> - Size md ({theme.typography.text.fontSize.md})</small>
      </Code>
      <Code size="sm">
        Code<small> - Size sm ({theme.typography.text.fontSize.sm})</small>
      </Code>
      <Code size="xs">
        Code<small> - Size xs ({theme.typography.text.fontSize.xs})</small>
      </Code>
    </Stack>
  )
}
export const Sizes = () => <List />
