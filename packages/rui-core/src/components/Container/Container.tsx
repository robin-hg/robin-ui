import type { DefaultProps, Sizes } from '@rui/types'
import React from 'react'
import { useTheme } from '@rui/hooks'
import { parseSize } from '@rui/utils'

import { StyledContainer } from './Container.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	maxWidth?: Sizes | number | string
}

export const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { maxWidth = '60ch', children, ...otherProps } = props
	const theme = useTheme()

	const width = (() => {
		switch (maxWidth) {
			case 'xs':
			case 'sm':
			case 'md':
			case 'lg':
			case 'xl':
				return theme.breakpoints[maxWidth]
			default:
				return maxWidth
		}
	})()

	return (
		<StyledContainer ref={ref} $maxWidth={parseSize(width)} {...otherProps}>
			{children}
		</StyledContainer>
	)
})

Container.displayName = 'Container'
