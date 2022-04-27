import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { RadioGroup, type Props } from './RadioGroup'
import { Radio } from '../Radio'

export default {
	title: 'Inputs/RadioGroup',
	component: RadioGroup,
	args: {
		label: 'Radio Group label',
		description: 'Description',
		value: 'react'
	},
	argTypes: {
		color: { control: { type: 'color' } },
		value: { control: { type: 'text' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => {
	const [, updateArgs] = useArgs()

	return (
		<RadioGroup
			{...args}
			onChange={value => {
				args.onChange?.(value)
				updateArgs({ value })
			}}>
			<Radio value="react" label="React" />
			<Radio value="vue" label="Vue" />
		</RadioGroup>
	)
}

export const Default = Template.bind({})
