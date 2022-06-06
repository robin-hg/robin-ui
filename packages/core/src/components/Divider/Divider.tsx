import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { DividerLine } from './Divider.style'

export interface Props extends DefaultProps<HTMLHRElement, 'children'> {
	orientation?: 'horizontal' | 'vertical'
	thickness?: number | string
	spacing?: SizeValue
}

export const Divider = React.forwardRef<HTMLHRElement, Props>((props, ref) => {
	const { orientation = 'horizontal', thickness = 1, spacing = 'md', ...otherProps } = props

	return (
		<DividerLine ref={ref} $orientation={orientation} $thickness={thickness} $spacing={spacing} {...otherProps} />
	)
})

Divider.displayName = 'Divider'
