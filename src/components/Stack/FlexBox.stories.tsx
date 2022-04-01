import type { Story, Meta } from '@storybook/react'
import styled from '@rui/style'

import Stack, { type Props } from './Stack'
import Paper from '@rui/components/Paper'

export default {
	title: 'Layout/Stack',
	component: Stack,
	argTypes: {
		spacing: { control: { type: 'range', min: 5, max: 70, step: 5 } }
	}
} as Meta<Props>

const Element = styled(Paper)`
	width: 100%;
	height: 10rem;
`

const Template: Story<Props> = args => (
	<Stack {...args}>
		<Element elevation={0}>1</Element>
		<Element elevation={0}>2</Element>
		<Element elevation={0}>3</Element>
	</Stack>
)
export const Default = Template.bind({})
Default.storyName = 'Stack'
