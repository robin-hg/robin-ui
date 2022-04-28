import type { Story, Meta } from '@storybook/react'

import { Hidden, type Props } from './Hidden'
import { Paper } from '../Paper'

export default {
	title: 'Layout/Hidden',
	component: Hidden,
	args: {
		breakpoint: 'sm',
		direction: 'down'
	}
} as Meta<Props>

export const Default: Story<Props> = args => (
	<Hidden {...args}>
		<Paper variant="flat">Hidden on {args.breakpoint}</Paper>
	</Hidden>
)
