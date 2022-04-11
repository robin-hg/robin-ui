import type { Story, Meta } from '@storybook/react'
import styled from '@rui/styles'

import { Stack, type Props } from './Stack'
import { Paper } from '../Paper'

export default {
	title: 'Layout/Stack',
	component: Stack,
	args: {
		spacing: 16
	},
	argTypes: {
		spacing: { control: { type: 'range', min: 0, max: 36, step: 1 } }
	}
} as Meta<Props>

const Element = styled(Paper)({
	width: '100%',
	height: '10rem'
})

const Template: Story<Props> = args => (
	<Stack {...args}>
		<Element elevation={0}>1</Element>
		<Element elevation={0}>2</Element>
		<Element elevation={0}>3</Element>
	</Stack>
)
export const Default = Template.bind({})