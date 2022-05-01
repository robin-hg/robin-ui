import type { Story, Meta } from '@storybook/react'
import { wait } from '@rui/utils'

import { AsyncButton, type Props } from './AsyncButton'

export default {
	title: 'Inputs/AsyncButton',
	component: AsyncButton,
	argTypes: {
		color: { control: 'color' },
		hoverColor: { control: 'color' },
		component: { control: null }
	}
} as Meta<Props>

const Template: Story<Props> = args => <AsyncButton {...args}>Click Me</AsyncButton>

export const Default = Template.bind({})
Default.args = {
	onClick: async () => {
		await wait(3000)
	}
}

export const WithError = Template.bind({})
WithError.args = {
	onClick: async () => {
		await wait(3000)
		throw Error('error')
	}
}
