import type { Story, Meta } from '@storybook/react'

import { Container, type Props } from './Container'

export default {
	title: 'Layout/Container',
	component: Container,
	args: {
		maxWidth: '60ch'
	},
	argTypes: {
		maxWidth: { control: 'number' }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
	<Container
		{...args}
		sx={{
			height: '30rem',
			background: 'surface.variant'
		}}
	/>
)
export const Default = Template.bind({})
