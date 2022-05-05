import type { Story, Meta } from '@storybook/react'

import { Progress, type Props } from './'

export default {
	title: 'Feedback/Progress',
	component: Progress,
	args: {
		percent: 50,
		color: 'primary',
		trackColor: 'surface.variant',
		thickness: 'sm',
		borderRadius: 'md',
		indeterminate: false,
		animated: true
	},
	argTypes: {
		thickness: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		borderRadius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
		trackColor: { control: 'color' }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Progress {...args} />
