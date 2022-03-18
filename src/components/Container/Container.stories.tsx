import type { Story, Meta } from '@storybook/react'
import styled from '../../style'

import Container, { type Props } from './Container'

export default {
	title: 'Layout/Container',
	component: Container,
	args: {
		maxWidth: 'lg'
	},
	argTypes: {
		maxWidth: { control: 'number' }
	}
} as Meta<Props>

const Content = styled.div`
	width: 100%;
	height: 30rem;
	background: ${props => props.theme.colors.paper.secondary};
`

const Template: Story<Props> = args => (
	<Container {...args}>
		<Content />
	</Container>
)
export const Default = Template.bind({})
Default.storyName = 'Container'
