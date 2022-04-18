import type { Story, Meta } from '@storybook/react'

import { Grid, type Props } from './Grid'
import { GridItem } from '../GridItem'
import { Paper } from '../Paper'

export default {
	title: 'Layout/Grid',
	component: Grid,
	subcomponents: { GridItem },
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
		<GridItem span={4}>
			<Paper sx={{ height: '20rem' }}>span=4</Paper>
		</GridItem>
		<GridItem span={4}>
			<Paper sx={{ height: '20rem' }}>span=4</Paper>
		</GridItem>
		<GridItem span={4}>
			<Paper sx={{ height: '20rem' }}>span=4</Paper>
		</GridItem>
		<GridItem span={3}>
			<Paper sx={{ height: '20rem' }}>span=3</Paper>
		</GridItem>
		<GridItem span={3}>
			<Paper sx={{ height: '20rem' }}>span=3</Paper>
		</GridItem>
		<GridItem span={3}>
			<Paper sx={{ height: '20rem' }}>span=3</Paper>
		</GridItem>
		<GridItem span={3}>
			<Paper sx={{ height: '20rem' }}>span=3</Paper>
		</GridItem>
	</Grid>
)
export const Default = Template.bind({})
