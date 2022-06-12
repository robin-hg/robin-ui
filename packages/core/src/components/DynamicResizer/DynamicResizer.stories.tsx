import type { Story, Meta } from '@storybook/react'
import { useState } from 'react'
import { sxc } from '@robin-ui/styles'

import { DynamicResizer, type Props } from './'
import { Paper } from '../Paper'

export default {
	title: 'Utils/DynamicResizer',
	component: DynamicResizer
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [toggle, setToggle] = useState(false)
	return (
		<Paper
			onClick={() => setToggle(!toggle)}
			variant="flat"
			sx={{ display: 'inline-block', userSelect: 'none' }}>
			<DynamicResizer {...args}>
				{!toggle ? (
					<sxc.div sx={{ whiteSpace: 'nowrap' }}>Click Me</sxc.div>
				) : (
					<sxc.div sx={{ width: '50rem' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis nunc,
						placerat id fringilla vitae, ornare quis ex. Phasellus consectetur mollis
						est vitae facilisis. Fusce tincidunt commodo ligula, eu blandit libero
						malesuada eu. Maecenas sed commodo ipsum. Donec molestie blandit massa, at
						dignissim justo pulvinar et. Nullam in lorem condimentum, dignissim quam at,
						porta ante. Sed consequat dictum felis aliquet iaculis. Proin vulputate
						condimentum ante, sit amet finibus lorem auctor id. Curabitur nec nunc ut
						ipsum pretium porttitor. Mauris eu ex non metus elementum feugiat. Sed
						malesuada hendrerit odio, a aliquet libero commodo sed. Proin mi justo,
						commodo lacinia ultricies eget, porttitor in urna. Suspendisse tempus
						rhoncus risus sed posuere. Nam pulvinar eros varius velit volutpat, a
						sagittis augue congue. Fusce semper diam eget dapibus placerat. Donec nec
						tortor a nulla tempus consequat.
					</sxc.div>
				)}
			</DynamicResizer>
		</Paper>
	)
}
