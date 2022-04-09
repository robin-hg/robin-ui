import React from 'react'
import type { DefaultProps } from '@rui/types'

import { PaperContainer } from './Paper.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	variant?: 'base' | 'variant'
	tint?: string
	elevation?: number
	outlined?: boolean
	component?: React.ElementType
}

export const Paper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { variant = 'base', tint = 'primary', elevation = 1, outlined, component, children, ...otherProps } = props

	return (
		<PaperContainer
			ref={ref}
			component={component}
			$variant={variant}
			$tint={tint}
			$elevation={elevation}
			$outlined={!!outlined}
			{...otherProps}>
			{children}
		</PaperContainer>
	)
})

Paper.displayName = 'Paper'
