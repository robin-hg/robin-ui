import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Radio, type Props } from './Radio'

export default {
	title: 'Inputs/Radio',
	component: Radio,
	args: {
		label: 'Label',
		checked: true,
		disabled: false
	},
	argTypes: {
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<Radio
			{...args}
			onChange={event => {
				args.onChange?.(event)
				updateArgs({ checked: event.target.checked })
			}}
		/>
	)
}
