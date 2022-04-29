import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { TextInput, type Props } from './TextInput'

export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	args: {
		label: 'Text input label',
		description: 'Description',
		value: 'Value'
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
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
