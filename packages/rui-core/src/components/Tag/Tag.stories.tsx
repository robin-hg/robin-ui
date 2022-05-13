import type { Story, Meta } from '@storybook/react'

import { Tag, type Props } from './Tag'

export default {
	title: 'Display/Tag',
	component: Tag,
	args: {
		variant: 'outlined',
		size: 'md',
		radius: 'sm',
		color: 'primary',
		children: 'I am a Tag'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Tag {...args} />
