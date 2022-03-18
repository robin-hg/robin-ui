import type { Story, Meta } from '@storybook/react'

import Link, { type Props } from './Link'

export default {
	title: 'Navigation/Link',
	component: Link,
	args: {
		children: 'I am a link',
		disabled: false
	},
	argTypes: {
		component: { control: false },
		onClick: { action: 'clicked' }
	}
} as Meta<Props>

const Template: Story<Props> = args => <Link href="#" {...args} />

export const Default = Template.bind({})
Default.storyName = 'Link'
