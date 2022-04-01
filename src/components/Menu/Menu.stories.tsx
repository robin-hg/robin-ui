import type { Story, Meta } from '@storybook/react'
import { useRef } from 'react'
import { useArgs } from '@storybook/api'

import Menu, { type Props } from './Menu'
import MenuItem from '../MenuItem'
import Button from '@rui/components/Button'

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

const Template: Story<Props> = args => {
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
				<MenuItem disabled>Disabled</MenuItem>
				<MenuItem active>Active</MenuItem>
				<MenuItem>A</MenuItem>
				<MenuItem>B</MenuItem>
				<MenuItem>C</MenuItem>
			</Menu>
		</>
	)
}

export const Default = Template.bind({})
Default.storyName = 'Menu'
