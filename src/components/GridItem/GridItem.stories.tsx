import type { Story, Meta } from '@storybook/react'
import styled from 'style'

import GridItem, { type Props } from './GridItem'
import { Grid, Paper } from 'index'

export default {
	title: 'Layout/GridItem',
	component: GridItem,
	args: {
		xl: 8,
		sm: 4
	}
} as Meta<Props>

const Element = styled(Paper)`
	height: 20rem;
`

const Template: Story<Props> = args => (
	<Grid>
		<Element />
		<GridItem {...args}>
			<Element>
				<p>xl {args.xl}</p>
				<p>sm {args.sm}</p>
			</Element>
		</GridItem>
		<Element />
		<Element />
		<Element />
		<Element />
		<Element />
		<Element />
		<Element />
	</Grid>
)
export const Default = Template.bind({})
Default.storyName = 'GridItem'
