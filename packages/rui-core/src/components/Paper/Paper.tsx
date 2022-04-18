import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { PaperContainer } from './Paper.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	variant?: 'flat' | 'elevated' | 'outlined'
	elevation?: number
	surfaceColor?: 'base' | 'variant'
	tint?: string
	padding?: SizeValue | SizeValue[]
	as?: React.ElementType
}

export const Paper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		variant = 'elevated',
		elevation = 1,
		surfaceColor = 'base',
		tint = 'primary',
		padding = 'md',
		as,
		children,
		...otherProps
	} = props

	return (
		<PaperContainer
			ref={ref}
			as={as}
			$variant={variant}
			$surfaceColor={surfaceColor}
			$tint={tint}
			$elevation={elevation}
			$padding={padding}
			{...otherProps}>
			{children}
		</PaperContainer>
	)
})

Paper.displayName = 'Paper'
