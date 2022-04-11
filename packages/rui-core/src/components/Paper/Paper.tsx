import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { PaperContainer } from './Paper.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	variant?: 'base' | 'variant'
	tint?: string
	elevation?: number
	outlined?: boolean
	padding?: SizeValue | SizeValue[]
	component?: React.ElementType
}

export const Paper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		variant = 'base',
		tint = 'primary',
		elevation = 1,
		padding = 'md',
		outlined,
		component,
		children,
		...otherProps
	} = props

	return (
		<PaperContainer
			ref={ref}
			component={component}
			$variant={variant}
			$tint={tint}
			$elevation={elevation}
			$outlined={!!outlined}
			$padding={padding}
			{...otherProps}>
			{children}
		</PaperContainer>
	)
})

Paper.displayName = 'Paper'
