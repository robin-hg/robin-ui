import type { DefaultProps, SizeValue, ColorToken } from '@rui/types'
import React from 'react'

import { PaperContainer } from './Paper.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	variant?: 'flat' | 'elevated' | 'outlined'
	elevation?: number
	surfaceColor?: 'base' | 'variant'
	tint?: ColorToken
	padding?: SizeValue | SizeValue[]
	borderRadius?: SizeValue
	as?: React.ElementType
}

export const Paper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		variant = 'elevated',
		elevation = 1,
		surfaceColor = 'base',
		tint = 'primary',
		padding = 'md',
		borderRadius = 'md',
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
			$borderRadius={borderRadius}
			{...otherProps}>
			{children}
		</PaperContainer>
	)
})

Paper.displayName = 'Paper'
