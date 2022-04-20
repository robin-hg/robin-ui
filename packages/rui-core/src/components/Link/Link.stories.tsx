import type { Story, Meta } from '@storybook/react'

import { Link, type Props } from './Link'

export default {
	title: 'Navigation/Link',
	component: Link,
	args: {
		children: 'I am a link',
		size: 'md',
		color: 'primary',
		underline: true
	},
	argTypes: {
		component: { control: false },
		size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		color: { control: { type: 'color' } }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Link href="#" {...args} />

export const Default = Template.bind({})
