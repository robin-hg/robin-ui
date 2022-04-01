import type { Story, Meta } from '@storybook/react'

import FocusTrap, { type Props } from './FocusTrap'
import Paper from '@rui/components/Paper'
import TextInput from '@rui/components/TextInput'

export default {
	title: 'Utils/FocusTrap',
	component: FocusTrap
} as Meta<Props>

const Template: Story<Props> = args => (
	<>
		<FocusTrap {...args}>
			<Paper sx={{ padding: '2rem' }}>
				<p>Once this section is focused</p>
				<div>
					<TextInput label="Input 1" />
				</div>
				<div>
					<TextInput label="Input 2" />
				</div>
			</Paper>
		</FocusTrap>
		<Paper sx={{ padding: '2rem' }}>
			<p>This input cannot be focused by pressing Tab</p>
			<TextInput label="Input 3" />
		</Paper>
	</>
)

export const Default = Template.bind({})
Default.storyName = 'FocusTrap'
