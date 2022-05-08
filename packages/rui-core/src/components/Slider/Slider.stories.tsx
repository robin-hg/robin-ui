import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Slider, type Props } from './Slider'

export default {
	title: 'Inputs/Slider',
	component: Slider,
	args: {
		label: 'Label',
		description: 'Description',
		errorMessage: 'Error message',
		value: 0,
		required: true,
		disabled: false,
		error: false
	},
	argTypes: {
		value: { control: { type: 'range', min: 0, max: 100, step: 1 } }
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [, updateArgs] = useArgs()
	return (
		<Slider
			{...args}
			onChange={newValue => {
				args.onChange?.(newValue)
				updateArgs({ value: newValue })
			}}
		/>
	)
}
