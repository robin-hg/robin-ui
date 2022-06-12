import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { DividerLine } from './Divider.style'

export interface Props extends DefaultProps<HTMLHRElement> {
	orientation?: 'horizontal' | 'vertical'
	thickness?: number | string
	spacing?: SizeValue
	alignLabel?: 'start' | 'center' | 'end'
}

export const Divider = React.forwardRef<HTMLHRElement, Props>((props, ref) => {
	const {
		orientation = 'horizontal',
		thickness = 1,
		spacing = 'md',
		alignLabel = 'center',
		children,
		...otherProps
	} = props

	return (
		<DividerLine
			ref={ref}
			role="separator"
			$orientation={orientation}
			$thickness={thickness}
			$spacing={spacing}
			$alignLabel={alignLabel}
			$hasChildren={children !== undefined}
			{...otherProps}>
			{children}
		</DividerLine>
	)
})

Divider.displayName = 'Divider'
