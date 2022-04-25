import type { ColorToken, ConstrainedSize } from '@rui/theme'
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
	$size: ConstrainedSize
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>(
	({ theme, $color }) => ({
		position: 'relative',
		display: 'inline-block',
		color: theme.fn.getColor($color)
	}),
	({ $size }) =>
		({
			sm: {
				width: '1.6rem',
				height: '1.6rem'
			},
			md: {
				width: '2.4rem',
				height: '2.4rem'
			},
			lg: {
				width: '3.2rem',
				height: '3.2rem'
			}
		}[$size])
)

interface StyledSpinnerProps {
	$speed: string
	$trail?: boolean
}

export const StyledSpinner = styled.div<StyledSpinnerProps>(({ $speed, $trail }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'inline-block',
	border: '0.2rem solid transparent',
	borderTopColor: 'currentColor',
	borderRightColor: 'currentColor',
	borderRadius: '999px',
	animation: `${spin} ${$speed} linear infinite`,
	opacity: $trail ? 0.5 : 1
}))
