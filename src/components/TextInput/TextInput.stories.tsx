import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/api'

import TextInput, { type Props } from './TextInput'

export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	args: {
		label: 'Label',
		value: 'Value',
		infoMessage: 'Info message',
		errorMessage: 'Error message'
	}
} as Meta<Props>

const Template: Story<Props> = args => {
	const [, updateArgs] = useArgs()
	return (
		<TextInput
			{...args}
			onChange={event => {
				args.onChange?.(event)
				updateArgs({ value: event.target.value })
			}}
		/>
	)
}

export const Default = Template.bind({})
Default.storyName = 'TextInput'
