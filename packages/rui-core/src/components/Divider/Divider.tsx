import type { DefaultProps, Sizes } from '@rui/types'
import React from 'react'
import { parseSize } from '@rui/utils'

import { DividerLine } from './Divider.style'

export interface Props extends DefaultProps<HTMLHRElement> {
	orientation?: 'horizontal' | 'vertical'
	thickness?: number | string
	margin?: Sizes | number | string
}

export const Divider = React.forwardRef<HTMLHRElement, Props>((props, ref) => {
	const { orientation = 'horizontal', thickness = 1, margin = 'xl', ...otherProps } = props

	return (
		<DividerLine
			ref={ref}
			$orientation={orientation}
			$thickness={parseSize(thickness)}
			$margin={margin}
			{...otherProps}
		/>
	)
})

Divider.displayName = 'Divider'
