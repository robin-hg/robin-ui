import type { Story, Meta } from '@storybook/react'

import { Skeleton, type Props } from './'

export default {
	title: 'Feedback/Skeleton',
	component: Skeleton,
	args: {
		radius: 'sm',
		animated: true,
		loading: true
	},
	argTypes: {
		radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Skeleton {...args}>Loading complete</Skeleton>
