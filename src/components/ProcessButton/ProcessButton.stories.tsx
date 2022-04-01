import type { Story, Meta } from '@storybook/react'
import { wait } from '@rui/utils'

import ProcessButton, { type Props } from './ProcessButton'

export default {
	title: 'Inputs/ProcessButton',
	component: ProcessButton,
	argTypes: {
		color: { control: 'color' },
		hoverColor: { control: 'color' },
		component: { control: null }
	}
} as Meta<Props>

const Template: Story<Props> = args => <ProcessButton {...args}>Click Me</ProcessButton>
export const Default = Template.bind({})
Default.args = {
	onClick: async () => {
		await wait(5000)
	}
}

export const WithError = Template.bind({})
WithError.args = {
	onClick: async () => {
		await wait(5000)
		throw Error('error')
	}
}
