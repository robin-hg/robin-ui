import type { Story, Meta } from '@storybook/react'

import * as Icons from '@rui/icons'
import { type Props } from '@rui/icons/src/createIcon'
import { FlexBox, Text } from './'

export default {
	title: 'Icons/Icons',
	component: Icons.ChevronDown,
	args: {
		size: 24,
		color: 'inherit'
	},
	argTypes: {
		size: { control: { type: 'range', min: 12, max: 36, step: 4 } }
	}
} as Meta<Props>

export const Default: Story<Props> = args => (
	<div>
		<FlexBox justifyContent="flex-start" wrap>
			{Object.entries(Icons).map(i => {
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
	</div>
)
