import type { Story, Meta } from '@storybook/react'

import Grid, { type Props } from './Grid'
import Paper from '@rui/components/Paper'

export default {
	title: 'Layout/Grid',
	component: Grid,
	args: {
		columns: 3
	},
	argTypes: {
		columns: { control: 'number' },
		spacing: { control: { type: 'range', min: 5, max: 70, step: 5 } }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
	<Grid {...args}>
		{Array(20)
			.fill(null)
			.map((_, i) => (
				<Paper key={i} sx={{ height: '20rem' }} />
			))}
	</Grid>
)
export const Default = Template.bind({})
Default.storyName = 'Grid'
