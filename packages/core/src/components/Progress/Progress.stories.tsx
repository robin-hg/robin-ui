import type { Story, Meta } from '@storybook/react'

import { Progress, type Props } from './'

export default {
	title: 'Feedback/Progress',
	component: Progress,
	args: {
		value: 50,
		color: 'primary',
		trackColor: 'surface.variant',
		thickness: 'md',
		radius: 'md',
		indeterminate: false,
		animated: true
	},
	argTypes: {
		value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
		trackColor: { control: 'color' },
		thickness: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Progress {...args} />
