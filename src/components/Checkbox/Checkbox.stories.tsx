import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/api'

import Checkbox, { type Props } from './Checkbox'

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox,
	args: {
		label: 'Label',
		disabled: false
	}
} as Meta<Props>

const Template: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<Checkbox
			{...args}
			onChange={value => {
				args.onChange?.(value)
				updateArgs({ checked: value })
			}}
		/>
	)
}

export const Default = Template.bind({})
Default.storyName = 'Checkbox'
