import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/api'

import Select, { type Props } from './Select'

export default {
	title: 'Inputs/Select',
	component: Select,
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		infoMessage: 'I am an info.',
		errorMessage: 'I am an error.',
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

const Template: Story<Props> = args => {
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
export const Default = Template.bind({})
Default.storyName = 'Select'
