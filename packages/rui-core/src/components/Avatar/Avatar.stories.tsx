import type { Story, Meta } from '@storybook/react'

import { Avatar, type Props } from './Avatar'

export default {
	title: 'Display/Avatar',
	component: Avatar,
	args: {
		color: 'primary',
		size: 'lg',
		borderRadius: 'xl',
		src: 'https://bit.ly/dan-abramov',
		alt: 'Dan Abramov'
	},
	argTypes: {
		borderRadius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Avatar {...args}>DA</Avatar>
