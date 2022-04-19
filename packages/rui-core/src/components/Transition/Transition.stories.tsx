import type { Story, Meta } from '@storybook/react'

import {
	Fade as FadeTransition,
	Collapse as CollapseTransition,
	Grow as GrowTransition,
	type Props
} from './Transition'
import { Paper } from '../Paper'

export default {
	title: 'Utils/Transitions',
	component: FadeTransition,
	args: {
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

// TODO: add switch toggle later

const FadeTemplate: Story<Props> = args => (
	<FadeTransition {...args}>
		<Paper variant="flat">Content</Paper>
	</FadeTransition>
)

export const Fade = FadeTemplate.bind({})

const CollapseTemplate: Story<Props> = args => (
	<CollapseTransition {...args}>
		<Paper variant="flat">Content</Paper>
	</CollapseTransition>
)

export const Collapse = CollapseTemplate.bind({})

const GrowTemplate: Story<Props> = args => (
	<GrowTransition {...args}>
		<Paper variant="flat">Content</Paper>
	</GrowTransition>
)

export const Grow = GrowTemplate.bind({})
