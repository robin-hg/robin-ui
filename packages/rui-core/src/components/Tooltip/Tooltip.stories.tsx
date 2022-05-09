import type { Story, Meta } from '@storybook/react'

import { Tooltip, type Props } from './Tooltip'
import { FlexBox } from '../FlexBox'

export default {
	title: 'Display/Tooltip',
	component: Tooltip,
	args: {
		label: 'Tooltip',
		placement: 'bottom'
	},
	argTypes: {
		placement: {
			control: { type: 'radio' },
			options: [
				'top',
				'top-start',
				'top-end',
				'right',
				'right-start',
				'right-end',
				'bottom',
				'bottom-start',
				'bottom-end',
				'left',
				'left-start',
				'left-end'
			]
		}
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	return (
		<FlexBox justifyContent="center" sx={{ height: '50rem' }}>
			<Tooltip {...args}>
				<span>Hover me.</span>
			</Tooltip>
		</FlexBox>
	)
}
