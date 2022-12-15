import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { useRef } from 'react'

import { Button } from '../Button'

import { Popover, type Props } from './Popover'

export default {
  title: 'Overlay/Popover',
  component: Popover
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const ref = useRef<HTMLButtonElement>(null)
  const [, updateArgs] = useArgs()
  return (
    <>
      <Button ref={ref} onClick={() => updateArgs({ open: !args.open })}>
        Open Popover
      </Button>
      <Popover
        {...args}
        trigger={ref.current}
        onClose={() => {
          args.onClose?.()
          updateArgs({ open: false })
        }}>
        Popover content
      </Popover>
    </>
  )
}
