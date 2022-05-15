import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { RadioGroup, type Props } from './RadioGroup'
import { Radio } from '../Radio'

export default {
	title: 'Inputs/RadioGroup',
	component: RadioGroup,
	args: {
		value: 'react'
	},
	argTypes: {
		value: { control: { type: 'text' } }
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
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
			<Radio value="svelte" label="Svelte" />
		</RadioGroup>
	)
}
