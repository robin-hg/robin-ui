import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { useRef } from 'react'

import { Menu, type Props } from './Menu'
import { MenuItem } from '../MenuItem'
import { Button } from '../Button'

export default {
  title: 'Overlay/Menu',
  component: Menu,
  subcomponents: { MenuItem },
  args: {
    minWidth: '20rem',
    maxHeight: '30rem'
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
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
