import type { Story, Meta } from '@storybook/react'
import { useTheme } from '@rui/hooks'

import { Label, type Props } from './Typography'
import { Stack } from '../Stack'

export default {
	title: 'Typography/Label',
	component: Label,
	args: {
		size: 'md',
		fontWeight: 500,
		children: 'Lorem ipsum'
	},
	argTypes: {
		size: { control: { type: 'radio', options: ['xl', 'lg', 'md', 'sm', 'xs'] } },
		fontWeight: { options: [400, 600], control: { type: 'select' } },
		component: { control: false }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Label {...args} />

export const Default = Template.bind({})

const List = () => {
	const theme = useTheme()
	return (
		<Stack>
			<Label size="lg">Label - Size lg ({theme.typography.text.fontSize.lg})</Label>
			<Label size="md">Label - Size md ({theme.typography.text.fontSize.md})</Label>
			<Label size="sm">Label - Size sm ({theme.typography.text.fontSize.sm})</Label>
		</Stack>
	)
}
export const Sizes = () => <List />
