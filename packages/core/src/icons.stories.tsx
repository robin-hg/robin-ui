import type { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import * as Icons from '@robin-ui/icons'
import { type Props } from '@robin-ui/icons/src/createIcon'
import { FlexBox, Text, TextInput } from './'

export default {
	title: 'Icons/Icons',
	component: Icons.ChevronDown,
	args: {
		size: 'md',
		color: 'inherit'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [search, setSearch] = useState('')

	return (
		<>
			<TextInput
				placeholder="Search Icon"
				value={search}
				onChange={event => setSearch(event.target.value)}
				sx={{ marginBottom: '1.6rem' }}
			/>
			<FlexBox justifyContent="flex-start" wrap>
				{Object.entries(Icons).map(i => {
					if (
						search.trim() !== '' &&
						!i[0].toLowerCase().includes(search.toLowerCase())
					) {
						return null
					}
					const Icon = i[1]
					return (
						<FlexBox
							direction="column"
							key={i[0]}
							spacing="sm"
							sx={{
								width: '8rem',
								margin: '2rem'
							}}>
							<Icon {...args} />
							<Text size="sm" sx={{ marginTop: 8 }}>
								{i[0]}
							</Text>
						</FlexBox>
					)
				})}
			</FlexBox>
		</>
	)
}
