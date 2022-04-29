import type { DefaultProps, ColorToken, ConstrainedSize } from '@rui/types'
import React from 'react'
import { SpinnerContainer, StyledSpinner } from './Spinner.style'

export interface Props extends DefaultProps<HTMLDivElement, 'children' | 'size'> {
	color?: ColorToken
	size?: ConstrainedSize
	speed?: number
}

export const Spinner = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { color = 'primary', size = 'md', speed = 500 } = props

	return (
		<SpinnerContainer ref={ref} $color={color} $size={size}>
			<StyledSpinner $speed={`${speed}ms`} />
			<StyledSpinner $speed={`${speed * 1.5}ms`} $trail />
		</SpinnerContainer>
	)
})

Spinner.displayName = 'Spinner'
