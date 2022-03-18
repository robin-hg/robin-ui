import type { Story, Meta } from '@storybook/react'
import styled from '../../style'

import ContainerBreak, { type Props } from './ContainerBreak'
import { Container } from 'index'

export default {
	title: 'Layout/ContainerBreak',
	component: ContainerBreak
} as Meta<Props>

const Content = styled.div`
	width: 100%;
	height: 30rem;
	background: ${props => props.theme.colors.paper.secondary};
`

const Template: Story<Props> = args => (
	<Container>
		<ContainerBreak {...args}>
			<Content />
		</ContainerBreak>
	</Container>
)
export const Default = Template.bind({})
Default.storyName = 'ContainerBreak'
