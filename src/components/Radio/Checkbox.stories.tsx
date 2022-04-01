import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import Radio, { type Props } from './Radio'

export default {
	title: 'Inputs/Radio',
	component: Radio,
	args: {
		label: 'Label',
		disabled: false
	}
} as Meta<Props>

const Template: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<Radio
			{...args}
			onChange={value => {
				args.onChange?.(value)
				updateArgs({ checked: value })
			}}
		/>
	)
}

export const Default = Template.bind({})
Default.storyName = 'Radio'
