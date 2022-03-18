import type { Story, Meta } from '@storybook/react'
import { Button } from 'index'

import ButtonGroup, { type Props } from './ButtonGroup'

export default {
	title: 'Inputs/ButtonGroup',
	component: ButtonGroup
} as Meta<Props>

const Template: Story<Props> = args => (
	<ButtonGroup {...args}>
		<Button>A</Button>
		<Button>B</Button>
		<Button>C</Button>
	</ButtonGroup>
)

export const Default = Template.bind({})
Default.storyName = 'ButtonGroup'
