import type { Story, Meta } from '@storybook/react'

import { Button, type Props } from './Button'

export default {
	title: 'Inputs/Button',
	component: Button,
	args: {
		children: 'I am a button',
		size: 'md',
		borderRadius: 'sm',
		variant: 'filled',
		color: 'primary'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		borderRadius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Button {...args} />
