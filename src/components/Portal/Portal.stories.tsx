import type { Story, Meta } from '@storybook/react'
import { useRef, useEffect } from 'react'
import styled from 'style'
import { useForceUpdate } from 'hooks'

import Portal, { type Props } from './Portal'
import { Paper, Typography } from 'index'

export default {
	title: 'Utils/Portal',
	component: Portal,
	argTypes: {
		target: { control: null }
	}
} as Meta<Props>

const Box = styled(Paper)`
	padding: 1rem;
	margin: 1rem 0;
`

const Template: Story<Props> = args => {
	const ref = useRef<HTMLDivElement>(null)
	const forceUpdate = useForceUpdate()

	useEffect(() => {
		forceUpdate()
	}, [])

	return (
		<div>
			<Box elevation={0}>
				<Typography>I should be rendered here.</Typography>
				{ref.current && (
					<Portal {...args} target={ref.current}>
						<Typography>But I am rendered here.</Typography>
					</Portal>
				)}
			</Box>
			<Box ref={ref} elevation={0} />
		</div>
	)
}
export const Default = Template.bind({})
Default.storyName = 'Portal'
