import type { Story, Meta } from '@storybook/react'
import { useTheme } from '@rui/hooks'

import { Text, type Props } from './Typography'
import { Stack } from '../Stack'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		size: 'md',
		color: 'inherit',
		fontWeight: 400,
		children: 'Lorem ipsum'
	},
	argTypes: {
		size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		highlight: { control: { type: 'color' } },
		fontWeight: { control: { type: 'select' }, options: [400, 600] }
	}
} as Meta<Props>

export const Default: Story<Props> = args => <Text {...args} />

const List = () => {
	const theme = useTheme()
	return (
		<Stack>
			<Text size="xl">
				Text<small> - Size xl ({theme.typography.text.fontSize.xl})</small>
			</Text>
			<Text size="lg">
				Text<small> - Size lg ({theme.typography.text.fontSize.lg})</small>
			</Text>
			<Text size="md">
				Text<small> - Size md ({theme.typography.text.fontSize.md})</small>
			</Text>
			<Text size="sm">
				Text<small> - Size sm ({theme.typography.text.fontSize.sm})</small>
			</Text>
			<Text size="xs">
				Text<small> - Size xs ({theme.typography.text.fontSize.xs})</small>
			</Text>
		</Stack>
	)
}
export const Sizes = () => <List />
