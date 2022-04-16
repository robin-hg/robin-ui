import type { Story, Meta } from '@storybook/react'

import { Grid, type Props } from './Grid'
import { Paper } from '../Paper'

export default {
	title: 'Layout/Grid',
	component: Grid,
	args: {
		columns: 12,
		spacing: 'md'
	},
	argTypes: {
		columns: { control: 'number' },
		spacing: { control: { type: 'radio' }, options: ['xl', 'lg', 'md', 'sm', 'xs'] }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
	<Grid {...args}>
		{Array(12)
			.fill(null)
			.map((_, i) => (
				<Paper key={i} elevation={0} sx={{ height: '20rem' }} />
			))}
	</Grid>
)
export const Default = Template.bind({})
