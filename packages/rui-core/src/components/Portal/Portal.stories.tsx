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

export const Default: Story<Props> = args => {
	const ref = useRef<HTMLDivElement>(null)

	return (
		<Stack>
			<Paper variant="flat">
				I should be rendered in here.
				<Portal {...args} target={ref.current}>
					But I am rendered here.
				</Portal>
			</Paper>
			<Paper ref={ref} variant="flat" />
		</Stack>
	)
}
