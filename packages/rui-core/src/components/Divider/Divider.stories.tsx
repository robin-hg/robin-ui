import type { Story, Meta } from '@storybook/react'

import { Divider, type Props } from './Divider'

export default {
	title: 'Layout/Divider',
	component: Divider,
	args: {
		thickness: 1,
		spacing: 'md',
		orientation: 'horizontal'
	},
	argTypes: {
		thickness: { control: { type: 'range', min: 1, max: 6, step: 1 } },
		spacing: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
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
