import type { Story, Meta } from '@storybook/react'

import * as Icons from './index'
import { type Props } from './createIcon'
import FlexBox from '@rui/components/FlexBox'
import Typography from '@rui/components/Typography'

export default {
	title: 'Icons/Icons',
	component: Icons.ChevronDown,
	args: {
		size: 24
	},
	argTypes: {
		size: { control: { type: 'range', min: 12, max: 72, step: 4 } },
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => (
	<div>
		<FlexBox
			justifyContent="flex-start"
			wrap
			sx={{
				['&& > *']: {
					width: '8rem',
					margin: '2rem',
					['& > p']: {
						marginTop: '0.8rem'
					}
				}
			}}>
			{Object.entries(Icons).map(i => {
				const Icon = i[1]
				return (
					<FlexBox direction="column" key={i[0]} spacing={5}>
						<Icon {...args} />
						<Typography variant="body" fontSize={12}>
							{i[0]}
						</Typography>
					</FlexBox>
				)
			})}
		</FlexBox>
	</div>
)

export const Default = Template.bind({})
Default.storyName = 'Icons'
