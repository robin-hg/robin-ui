import type { Story, Meta } from '@storybook/react'

import { Divider, type Props } from './Divider'

export default {
	title: 'Layout/Divider',
	component: Divider,
	args: {
		thickness: 1,
		margin: 16,
		orientation: 'horizontal'
	},
	argTypes: {
		thickness: { control: { type: 'range', min: 1, max: 12, step: 1 } },
		margin: { control: { type: 'range', min: 0, max: 36, step: 1 } }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
	<div>
		Content
		<Divider {...args} />
		Content
	</div>
)
export const Default = Template.bind({})
