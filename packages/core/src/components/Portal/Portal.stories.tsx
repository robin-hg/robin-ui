import type { Meta, Story } from '@storybook/react'
import { useRef } from 'react'

import { Stack } from '../Stack'
import { Paper } from '../Paper'

import { Portal, type Props } from './Portal'

export default {
  title: 'Utils/Portal',
  component: Portal,
  argTypes: {
    container: { control: null }
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
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
