import type { Story, Meta } from '@storybook/react'
import { useRef, useEffect } from 'react'
import styled from '@rui/style'
import { useForceUpdate } from '@rui/hooks'

import Portal, { type Props } from './Portal'
import Paper from '@rui/components/Paper'
import Typography from '@rui/components/Typography'

export default {
	title: 'Utils/Portal',
	component: Portal,
	argTypes: {
		target: { control: null }
	}
} as Meta<Props>

const Box = styled(Paper)`
	padding: 0.8rem;
	margin: 0.8rem 0;
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
				<Typography>I should be rendered in here.</Typography>
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
