import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { useRef } from 'react'

import { Button } from '../Button'

import { Popover, type Props } from './Popover'

export default {
  title: 'Overlay/Popover',
  component: Popover
} as Meta<Props>

export const Default: Story<Props> = args => {
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
