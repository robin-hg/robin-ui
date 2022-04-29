import type { Story, Meta } from '@storybook/react'
import { useTheme } from '@rui/hooks'

import { Label, type Props } from './Typography'
import { Stack } from '../Stack'

export default {
	title: 'Typography/Label',
	component: Label,
	args: {
		size: 'md',
		color: 'inherit',
		fontWeight: 600,
		children: 'Lorem ipsum'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
		highlight: { control: { type: 'color' } },
		fontWeight: { control: { type: 'select' }, options: [400, 600] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Label {...args} />

const List = () => {
	const theme = useTheme()
	return (
		<Stack>
			<Label size="lg">Label - Size lg ({theme.typography.label.fontSize.lg})</Label>
			<Label size="md">Label - Size md ({theme.typography.label.fontSize.md})</Label>
			<Label size="sm">Label - Size sm ({theme.typography.label.fontSize.sm})</Label>
		</Stack>
	)
}
export const Sizes = () => <List />
