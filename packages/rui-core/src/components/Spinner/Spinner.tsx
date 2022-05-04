import type { DefaultProps, ColorToken, SizeValue } from '@rui/types'
import React from 'react'
import { VisuallyHidden } from '../VisuallyHidden'
import { SpinnerContainer, StyledSpinner } from './Spinner.style'

export interface Props extends DefaultProps<HTMLDivElement, 'children' | 'size'> {
	color?: ColorToken
	size?: SizeValue
	speed?: number
}

export const Spinner = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { color = 'primary', size = 'md', speed = 500 } = props

	return (
		<SpinnerContainer ref={ref} $color={color} $size={size}>
			<StyledSpinner $speed={`${speed}ms`} />
			<StyledSpinner $speed={`${speed * 1.5}ms`} $trail />
			<VisuallyHidden>Loading</VisuallyHidden>
		</SpinnerContainer>
	)
})

Spinner.displayName = 'Spinner'
