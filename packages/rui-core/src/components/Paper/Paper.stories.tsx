import type { Story, Meta } from '@storybook/react'
import { sxc } from '@rui/styles'

import { Paper, type Props } from './Paper'

export default {
	title: 'Surface/Paper',
	component: Paper,
	args: {
		variant: 'base',
		tint: 'primary',
		elevation: 1
	},
	argTypes: {
		elevation: { control: { type: 'range', min: 0, max: 25, step: 1 } },
		tint: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
	<Paper {...args}>
		<sxc.div
			sx={{
				width: '100%',
				height: '30rem'
			}}
		/>
	</Paper>
)
export const Default = Template.bind({})
