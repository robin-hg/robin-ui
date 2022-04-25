import type { Story, Meta } from '@storybook/react'

import { Spinner, type Props } from './Spinner'

export default {
	title: 'Feedback/Spinner',
	component: Spinner,
	args: {
		color: 'primary',
		size: 'md'
	},
	argTypes: {
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Spinner {...args} />
export const Default = Template.bind({})
