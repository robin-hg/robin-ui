import React from 'react'
import { parseSize } from '@rui/utils'

import { DividerLine } from './Divider.style'

export interface Props extends RobinUI.StandardProps<HTMLHRElement> {
	orientation?: 'horizontal' | 'vertical'
	thickness?: number | string
	margin?: number | string
	color?: string
}

const Divider = React.forwardRef<HTMLHRElement, Props>((props, ref) => {
	const { orientation = 'horizontal', thickness = 1, margin = 16, color = 'gray', ...otherProps } = props

	return (
		<DividerLine
			ref={ref}
			$orientation={orientation}
			$thickness={parseSize(thickness)}
			$margin={parseSize(margin)}
			$color={color}
			{...otherProps}
		/>
	)
})

Divider.displayName = 'Divider'
export default Divider
