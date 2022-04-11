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
		sx={theme => ({
			height: '30rem',
			background: theme.palette.surface.base
		})}
	/>
)
export const Default = Template.bind({})
