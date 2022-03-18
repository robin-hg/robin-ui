import type { Story, Meta } from '@storybook/react'

import TextInput, { type Props } from './TextInput'

export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	args: {
		label: 'Label',
		value: 'Value'
	}
} as Meta<Props>

const Template: Story<Props> = args => <TextInput {...args} />

export const Default = Template.bind({})
Default.storyName = 'TextInput'
