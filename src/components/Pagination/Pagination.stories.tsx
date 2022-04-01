import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/api'

import Pagination, { type Props } from './Pagination'

export default {
	title: 'Navigation/Pagination',
	component: Pagination,
	args: {
		currentPage: 1,
		totalItems: 500,
		itemsPerPage: 10
	},
	argTypes: {
		color: { control: 'color' }
	}
} as Meta<Props>

const Template: Story<Props> = args => {
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
export const Default = Template.bind({})
Default.storyName = 'Pagination'
