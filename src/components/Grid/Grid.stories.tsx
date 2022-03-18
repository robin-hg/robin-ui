import type { Story, Meta } from '@storybook/react'
import styled from 'style'

import Grid, { type Props } from './Grid'
import { Paper } from 'index'

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

const Element = styled(Paper)`
	height: 20rem;
`

const Template: Story<Props> = args => (
	<Grid {...args}>
		{Array(20)
			.fill(null)
			.map((_, i) => (
				<Element key={i} />
			))}
	</Grid>
)
export const Default = Template.bind({})
Default.storyName = 'Grid'
