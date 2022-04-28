import type { Story, Meta } from '@storybook/react'

import { ContainerBreak, type Props } from './ContainerBreak'
import { Container } from '../Container'

export default {
	title: 'Layout/ContainerBreak',
	component: ContainerBreak
} as Meta<Props>

export const Default: Story<Props> = args => (
	<Container>
		<ContainerBreak
			{...args}
			sx={{
				width: '100%',
				height: '30rem',
				background: 'surface.variant'
			}}></ContainerBreak>
	</Container>
)
