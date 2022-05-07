import type { Story, Meta } from '@storybook/react'

import { Alert, type Props } from './Alert'

export default {
	title: 'Feedback/Alert',
	component: Alert,
	args: {
		status: 'critical',
		variant: 'flat'
	},
	argTypes: {
		status: { control: { type: 'radio' }, options: ['none', 'success', 'info', 'warning', 'critical'] },
		variant: { control: { type: 'radio' }, options: ['flat', 'outlined'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => (
	<Alert {...args} title="Alert">
		Alert
	</Alert>
)
