import type { Story, Meta } from '@storybook/react'
import styled from '../style'

import * as Icons from './'
import { type Props } from './createIcon'
import { FlexBox, Typography } from 'index'

export default {
	title: 'Icons/Icons',
	component: Icons.ChevronDown,
	args: {
		size: 18
	},
	argTypes: {
		size: { control: { type: 'range', min: 12, max: 72, step: 4 } }
	}
} as Meta<Props>

const Content = styled(FlexBox)`
	&& > * {
		width: 8rem;
		margin: 2rem;

		& > p {
			margin-top: 1rem;
		}
	}
`

const Template: Story<Props> = args => (
	<div>
		<Content justifyContent="flex-start" wrap>
			{Object.entries(Icons).map(i => {
				const Icon = i[1]
				return (
					<FlexBox direction="column" key={i[0]} spacing={5}>
						<Icon {...args} />
						<Typography variant="body2" fontSize={12}>
							{i[0]}
						</Typography>
					</FlexBox>
				)
			})}
		</Content>
	</div>
)

export const Default = Template.bind({})
Default.storyName = 'Icons'
