import type { Story, Meta } from '@storybook/react'
import { useRef } from 'react'

import { Portal, type Props } from './Portal'
import { Stack } from '../Stack'
import { Paper } from '../Paper'

export default {
	title: 'Utils/Portal',
	component: Portal,
	argTypes: {
		target: { control: null }
	}
} as Meta<Props>

const Template: Story<Props> = args => {
	const ref = useRef<HTMLDivElement>(null)

	return (
		<Stack>
			<Paper elevation={0}>
				I should be rendered in here.
				<Portal {...args} targetRef={ref}>
					But I am rendered here.
				</Portal>
			</Paper>
			<Paper ref={ref} elevation={0} />
		</Stack>
	)
}
export const Default = Template.bind({})
