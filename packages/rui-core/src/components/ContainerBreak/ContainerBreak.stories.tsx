import type { Story, Meta } from '@storybook/react'

import { ContainerBreak, type Props } from './ContainerBreak'
import { Container } from '../Container'

export default {
	title: 'Layout/ContainerBreak',
	component: ContainerBreak
} as Meta<Props>

const Template: Story<Props> = args => (
	<Container>
		<ContainerBreak
			{...args}
			sx={theme => ({
				width: '100%',
				height: '30rem',
				background: theme.palette.surface.base
			})}></ContainerBreak>
	</Container>
)
export const Default = Template.bind({})
