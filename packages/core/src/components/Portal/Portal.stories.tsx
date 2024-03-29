import { useRef } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { Paper } from '../Paper'
import { Stack } from '../Stack'

import { Portal, type Props } from './Portal'

export default {
  title: 'Utils/Portal',
  component: Portal,
  argTypes: {
    container: { control: null }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Stack>
      <Paper variant="flat">
        I should be rendered in here.
        <Portal {...args} container={ref.current}>
          But I am rendered here.
        </Portal>
      </Paper>
      <Paper ref={ref} variant="flat" />
    </Stack>
  )
}
