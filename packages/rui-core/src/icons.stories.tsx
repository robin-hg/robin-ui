import type { Story, Meta } from '@storybook/react'

import * as Icons from '@rui/icons'
import { type Props } from '@rui/icons/src/createIcon'
import { FlexBox } from './'

export default {
	title: 'Icons/Icons',
	component: Icons.ChevronDown,
	args: {
		size: 24
	},
	argTypes: {
		size: { control: { type: 'range', min: 12, max: 36, step: 4 } },
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
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
						<p>{i[0]}</p>
					</FlexBox>
				)
			})}
		</FlexBox>
	</div>
)

export const Default = Template.bind({})
