import type { Story, Meta } from '@storybook/react'

import Spinner, { type Props } from './Spinner'

export default {
	title: 'Display/Spinner',
	component: Spinner,
	args: {
		size: 32
	},
	argTypes: {
		size: { control: { type: 'range', min: 12, max: 72, step: 4 } }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Spinner {...args} />

export const Default = Template.bind({})
Default.storyName = 'Spinner'
