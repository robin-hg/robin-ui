import type { ColorToken, SizeValue } from '@robin-ui/theme'
import styled, { keyframes } from '@robin-ui/styles'

const defaultSizes = {
	xs: '1.6rem',
	sm: '2rem',
	md: '2.4rem',
	lg: '3.2rem',
	xl: '4.4rem'
}

const defaultThickness = {
	xs: '0.1rem',
	sm: '0.2rem',
	md: '0.2rem',
	lg: '0.3rem',
	xl: '0.4rem'
}

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
	width: theme.fn.getSize($size, defaultSizes),
	height: theme.fn.getSize($size, defaultSizes)
}))

interface StyledSpinnerProps {
	$size: SizeValue
	$speed: string
	$trail?: boolean
}

export const StyledSpinner = styled.div<StyledSpinnerProps>(({ theme, $size, $speed, $trail }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'inline-block',
	border: `${theme.fn.getSize($size, defaultThickness)} solid transparent`,
	borderTopColor: 'currentColor',
	borderRightColor: 'currentColor',
	borderRadius: theme.radius.xl,
	animation: `${spin} ${$speed} linear infinite`,
	opacity: $trail ? 0.5 : 1
}))
