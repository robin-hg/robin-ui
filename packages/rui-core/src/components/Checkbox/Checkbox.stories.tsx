import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Checkbox, type Props } from './Checkbox'

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox,
	args: {
		label: 'Label',
		disabled: false
	},
	argTypes: {
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<Checkbox
			{...args}
			onChange={event => {
				args.onChange?.(event)
				updateArgs({ checked: event.target.checked })
			}}
		/>
	)
}

export const Default = Template.bind({})
