import type { Story, Meta } from '@storybook/react'

import Tag, { type Props } from './Tag'

export default {
	title: 'Display/Tag',
	component: Tag,
	args: {
		children: 'I am a Tag'
	},
	argTypes: {
		color: { control: 'color' }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Tag {...args} />

export const Default = Template.bind({})
Default.storyName = 'Tag'
