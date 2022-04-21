import type { Story, Meta } from '@storybook/react'

import { Button, type Props } from './Button'

export default {
	title: 'Inputs/Button',
	component: Button,
	args: {
		children: 'I am a button',
		size: 'md',
		variant: 'filled',
		color: 'primary'
	},
	argTypes: {
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Button {...args} />

export const Default = Template.bind({})
Default.storyName = 'Button'
