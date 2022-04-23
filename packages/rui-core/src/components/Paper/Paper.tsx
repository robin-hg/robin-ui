import type { DefaultProps, SizeValue, ColorToken } from '@rui/types'
import React, { useMemo } from 'react'

import { PaperContainer } from './Paper.style'

export const PaperContext = React.createContext<{ paperColor?: ColorToken }>({})

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
	const ctxValue = useMemo(() => ({ paperColor: `surface.${surfaceColor}` }), [surfaceColor])

	return (
		<PaperContext.Provider value={ctxValue}>
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
		</PaperContext.Provider>
	)
})

Paper.displayName = 'Paper'
