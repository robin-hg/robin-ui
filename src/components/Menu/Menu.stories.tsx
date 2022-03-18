import type { Story, Meta } from '@storybook/react'
import { useRef } from 'react'
import { useArgs } from '@storybook/client-api'

import Menu, { type Props } from './Menu'
import { Button } from 'index'

export default {
	title: 'Display/Menu',
	component: Menu,
	args: {
		width: 300
	},
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
			<Button ref={ref} onClick={() => updateArgs({ open: true })}>
				Open Menu
			</Button>
			{ref.current && (
				<Menu
					{...args}
					target={ref.current}
					onClose={() => {
						args.onClose?.()
						updateArgs({ open: false })
					}}>
					<div style={{ height: 500 }}>Menu Content</div>
				</Menu>
			)}
		</>
	)
}

export const Default = Template.bind({})
Default.storyName = 'Menu'
