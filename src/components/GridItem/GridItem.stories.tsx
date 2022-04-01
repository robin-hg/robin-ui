import type { Story, Meta } from '@storybook/react'
import styled from '@rui/style'

import GridItem, { type Props } from './GridItem'
import Paper from '@rui/components/Paper'
import Grid from '@rui/components/Grid'

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
