import type { Story, Meta } from '@storybook/react'
import styled from 'style'

import FocusTrap, { type Props } from './FocusTrap'
import { Paper, TextInput } from 'index'

export default {
	title: 'Utils/FocusTrap',
	component: FocusTrap
} as Meta<Props>

const Content = styled(Paper)`
	padding: 2rem;
`

const Template: Story<Props> = args => (
	<>
		<FocusTrap {...args}>
			<Content>
				<p>Once this section is focused</p>
				<div>
					<TextInput label="Input 1" />
				</div>
				<div>
					<TextInput label="Input 2" />
				</div>
			</Content>
		</FocusTrap>
		<Content>
			<p>This input cannot be focused by pressing Tab</p>
			<TextInput label="Input 3" />
		</Content>
	</>
)

export const Default = Template.bind({})
Default.storyName = 'FocusTrap'
