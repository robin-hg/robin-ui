import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Select, type Props } from './Select'

export default {
	title: 'Inputs/Select',
	component: Select,
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		description: 'Description',
		errorMessage: 'Error message',
		value: '',
		options: [
			{ value: 'A' },
			{ value: 'B', disabled: true },
			{ value: 'C' },
			{ value: 'D' },
			{ value: 'E' },
			{ value: 'F' },
			{ value: 'G' },
			{ value: 'H' },
			{ value: 'I' },
			{ value: 'J' },
			{ value: 'K' }
		],
		required: true
	},
	argTypes: {
		value: { control: 'text' }
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [, updateArgs] = useArgs()
	return (
		<Select
			{...args}
			onChange={newValue => {
				args.onChange?.(newValue)
				updateArgs({ value: newValue })
			}}
		/>
	)
}
