import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { useRef } from 'react'

import { MenuItem } from '../MenuItem'
import { Button } from '../Button'

import { Menu, type Props } from './Menu'

export default {
  title: 'Overlay/Menu',
  component: Menu,
  subcomponents: { MenuItem },
  args: {
    minWidth: '20rem',
    maxHeight: '30rem'
  }
} as Meta<Props>

export const Default: StoryFn<Props> = args => {
  const ref = useRef<HTMLButtonElement>(null)
  const [, updateArgs] = useArgs()
  return (
    <>
      <Button ref={ref} onClick={() => updateArgs({ open: !args.open })}>
        Open Menu
      </Button>
      <Menu
        {...args}
        trigger={ref.current}
        onClose={() => {
          args.onClose?.()
          updateArgs({ open: false })
        }}>
        <MenuItem onClick={() => updateArgs({ open: false })} disabled>
          Disabled
        </MenuItem>
        <MenuItem onClick={() => updateArgs({ open: false })} active>
          Active
        </MenuItem>
        <MenuItem onClick={() => updateArgs({ open: false })}>A</MenuItem>
        <MenuItem onClick={() => updateArgs({ open: false })}>B</MenuItem>
        <MenuItem onClick={() => updateArgs({ open: false })}>C</MenuItem>
      </Menu>
    </>
  )
}
