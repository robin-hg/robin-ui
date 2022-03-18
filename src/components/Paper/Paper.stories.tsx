import type { Story, Meta } from '@storybook/react'
import styled from 'style'

import Paper, { type Props } from './Paper'

export default {
	title: 'Surface/Paper',
	component: Paper,
	argTypes: {
		elevation: { control: { type: 'range', min: 0, max: 25, step: 1 } },
		component: { control: false }
	}
} as Meta<Props>

const Content = styled.div`
	width: 100%;
	height: 30rem;
`

const Template: Story<Props> = args => (
	<Paper {...args}>
		<Content />
	</Paper>
)
export const Default = Template.bind({})
Default.storyName = 'Paper'
