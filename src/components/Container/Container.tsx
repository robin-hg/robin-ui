import React from 'react'
import { useTheme } from 'hooks'
import { parseSize } from 'utils'

import { StyledContainer } from './Container.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | number | string
}

const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { maxWidth = 'lg', children, ...otherProps } = props
	const theme = useTheme()

	const width = (() => {
		switch (maxWidth) {
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
export default Container
