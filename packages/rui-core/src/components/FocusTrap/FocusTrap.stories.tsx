import type { Story, Meta } from '@storybook/react'

import { FocusTrap, type Props } from './FocusTrap'
import { Paper } from '../Paper'
import { Stack } from '../Stack'

export default {
	title: 'Utils/FocusTrap',
	component: FocusTrap
} as Meta<Props>

const Template: Story<Props> = args => (
	<Stack>
		<FocusTrap {...args}>
			<Paper elevation={0} sx={{ padding: '2rem' }}>
				<p>Once this section is focused</p>
				<div>
					<input />
				</div>
				<div>
					<input />
				</div>
			</Paper>
		</FocusTrap>
		<Paper elevation={0} sx={{ padding: '2rem' }}>
			<p>This input cannot be focused by pressing Tab</p>
			<input />
		</Paper>
	</Stack>
)

export const Default = Template.bind({})
