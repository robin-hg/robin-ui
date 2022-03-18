import type { Story, Meta } from '@storybook/react'
import styled from 'style'

import FlexBox, { type Props } from './FlexBox'
import { Paper } from 'index'

export default {
	title: 'Layout/FlexBox',
	component: FlexBox,
	argTypes: {
		spacing: { control: { type: 'range', min: 5, max: 70, step: 5 } }
	}
} as Meta<Props>

const Element = styled(Paper)`
	width: 10rem;
	height: 10rem;
`

const Template: Story<Props> = args => (
	<FlexBox {...args}>
		<Element elevation={0}>1</Element>
		<Element elevation={0}>2</Element>
		<Element elevation={0}>3</Element>
	</FlexBox>
)
export const Default = Template.bind({})
Default.storyName = 'FlexBox'
