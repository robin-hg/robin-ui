import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Pagination, type Props } from './Pagination'

export default {
	title: 'Navigation/Pagination',
	component: Pagination,
	args: {
		currentPage: 1,
		totalItems: 500,
		itemsPerPage: 10,
		maxButtons: 7,
		size: 'md',
		align: 'center'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [, updateArgs] = useArgs()
	return (
		<Pagination
			{...args}
			onChange={newPage => {
				args.onChange?.(newPage)
				updateArgs({ currentPage: newPage })
			}}
		/>
	)
}
