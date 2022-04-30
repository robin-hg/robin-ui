import type { Story, Meta } from '@storybook/react'
import { useRef } from 'react'
import { useArgs } from '@storybook/client-api'

import { Menu, type Props } from './Menu'
import { MenuItem } from '../MenuItem'
import { Button } from '../Button'

export default {
	title: 'Display/Menu',
	component: Menu,
	subcomponents: { MenuItem },
	argTypes: {
		width: { control: 'number' },
		modifiers: { control: null },
		tooltipComponent: { control: null },
		tooltipProps: { control: null }
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
				target={ref.current}
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
