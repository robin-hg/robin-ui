import type { ColorToken, SizeValue } from '@rui/theme'
import styled, { keyframes } from '@rui/styles'

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`

interface SpinnerContainerProps {
	$color: ColorToken
	$size: SizeValue
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>(({ theme, $color, $size }) => ({
	position: 'relative',
	display: 'inline-block',
	color: theme.fn.getColor($color),
	width: theme.fn.getSize($size, theme.size),
	height: theme.fn.getSize($size, theme.size)
}))

interface StyledSpinnerProps {
	$speed: string
	$trail?: boolean
}

export const StyledSpinner = styled.div<StyledSpinnerProps>(({ theme, $speed, $trail }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'inline-block',
	border: '0.2rem solid transparent',
	borderTopColor: 'currentColor',
	borderRightColor: 'currentColor',
	borderRadius: theme.borderRadius.xl,
	animation: `${spin} ${$speed} linear infinite`,
	opacity: $trail ? 0.5 : 1
}))
