import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import {
	Fade as FadeTransition,
	Collapse as CollapseTransition,
	Grow as GrowTransition,
	type Props
} from './Transition'
import { Paper } from '../Paper'
import { Switch } from '../Switch'

export default {
	title: 'Utils/Transitions',
	component: FadeTransition,
	args: {
		in: false,
		ease: 'easeOut',
		duration: 200
	},
	argTypes: {
		ease: {
			control: 'select',
			options: [
				'linear',
				'easeIn',
				'easeOut',
				'easeInOut',
				'circIn',
				'circOut',
				'circInOut',
				'backIn',
				'backOut',
				'backInOut'
			]
		}
	}
} as Meta<Props>

export const Fade: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<>
			<Switch
				label="Toggle"
				checked={args.in}
				onChange={event => updateArgs({ in: event.target.checked })}
			/>
			<FadeTransition {...args}>
				<Paper variant="flat">Content</Paper>
			</FadeTransition>
		</>
	)
}

export const Collapse: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<>
			<Switch
				label="Toggle"
				checked={args.in}
				onChange={event => updateArgs({ in: event.target.checked })}
			/>
			<CollapseTransition {...args}>
				<Paper variant="flat">Content</Paper>
			</CollapseTransition>
		</>
	)
}

export const Grow: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<>
			<Switch
				label="Toggle"
				checked={args.in}
				onChange={event => updateArgs({ in: event.target.checked })}
			/>
			<GrowTransition {...args}>
				<Paper variant="flat">Content</Paper>
			</GrowTransition>
		</>
	)
}
