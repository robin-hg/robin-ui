import type { Story, Meta } from '@storybook/react'
import styled from '@rui/styles'

import { Stack, type Props } from './Stack'
import { Paper } from '../Paper'

export default {
	title: 'Layout/Stack',
	component: Stack,
	args: {
		spacing: 'md'
	},
	argTypes: {
		spacing: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

const Element = styled(Paper)({
	width: '100%',
	height: '10rem'
})

const Template: Story<Props> = args => (
	<Stack {...args}>
		<Element variant="flat">1</Element>
		<Element variant="flat">2</Element>
		<Element variant="flat">3</Element>
	</Stack>
)
export const Default = Template.bind({})
