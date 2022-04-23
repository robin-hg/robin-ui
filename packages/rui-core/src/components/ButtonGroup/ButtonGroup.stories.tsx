import type { Story, Meta } from '@storybook/react'

import { ButtonGroup, type Props } from './ButtonGroup'
import { Button } from '../Button'

export default {
	title: 'Inputs/ButtonGroup',
	component: ButtonGroup,
	args: {
		size: 'md',
		variant: 'filled',
		color: 'primary'
	},
	argTypes: {
		color: { control: { type: 'color' } }
	}
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