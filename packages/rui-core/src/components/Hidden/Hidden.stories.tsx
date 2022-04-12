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

const Template: Story<Props> = args => (
	<Hidden {...args}>
		<Paper elevation={0}>Hidden on {args.breakpoint}</Paper>
	</Hidden>
)
export const Default = Template.bind({})
