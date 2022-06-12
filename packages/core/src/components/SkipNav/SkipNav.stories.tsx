import type { Story, Meta } from '@storybook/react'

import { SkipNav, type Props } from './SkipNav'

export default {
	title: 'Utils/SkipNav',
	component: SkipNav
} as Meta<Props>

const Template: Story<Props> = () => (
	<>
		<SkipNav contentId="content" />
		<div id="content">Press tab to focus</div>
	</>
)

export const Default = Template.bind({})
