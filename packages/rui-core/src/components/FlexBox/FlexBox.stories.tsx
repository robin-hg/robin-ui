import type { Story, Meta } from '@storybook/react'
import styled from '@rui/styles'

import { FlexBox, type Props } from './FlexBox'
import { Paper } from '../Paper'

export default {
	title: 'Layout/FlexBox',
	component: FlexBox,
	args: {
		direction: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		spacing: 16
	},
	argTypes: {
		direction: { control: { type: 'text' } },
		justifyContent: { control: { type: 'text' } },
		alignItems: { control: { type: 'text' } },
		spacing: { control: { type: 'range', min: 0, max: 36, step: 1 } }
	}
} as Meta<Props>

const Element = styled(Paper)({
	width: '10rem',
	height: '10rem'
})

const Template: Story<Props> = args => (
	<FlexBox {...args}>
		<Element elevation={0}>1</Element>
		<Element elevation={0}>2</Element>
		<Element elevation={0}>3</Element>
	</FlexBox>
)
export const Default = Template.bind({})
