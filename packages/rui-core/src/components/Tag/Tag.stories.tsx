import type { Story, Meta } from '@storybook/react'

import { Tag, type Props } from './Tag'

export default {
	title: 'Display/Tag',
	component: Tag,
	args: {
		variant: 'filled',
		size: 'md',
		color: 'primary',
		children: 'I am a Tag'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Tag {...args} />

export const Default = Template.bind({})
