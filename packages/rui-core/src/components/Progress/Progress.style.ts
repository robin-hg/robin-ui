import type { ColorToken, SizeValue } from '@rui/theme'
import styled, { keyframes } from '@rui/styles'

const defaultThickness = {
	xs: '0.4rem',
	sm: '0.6rem',
	md: '0.8rem',
	lg: '1rem',
	xl: '1.2rem'
}

const pulse = keyframes`
	from {
		width: 0%;
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	to {
		width: 150%;
		opacity: 0;
	}
`

interface TrackProps {
	$thickness: SizeValue
	$trackColor: ColorToken
	$radius: SizeValue
}

export const Track = styled.div<TrackProps>(({ theme, $thickness, $trackColor, $radius }) => ({
	width: '100%',
	height: theme.fn.getSize($thickness, defaultThickness),
	overflow: 'hidden',
	background: theme.fn.getColor($trackColor),
	borderRadius: theme.fn.getSize($radius, theme.radius)
}))

interface BarProps {
	$color: string
	$radius: SizeValue
	$indeterminate: boolean
	$animated: boolean
}

export const Bar = styled.div<BarProps>(
	({ theme, $color, $radius }) => ({
		position: 'relative',
		height: '100%',
		background: theme.fn.getColor($color),
		transition: theme.fn.getTransition(),
		borderRadius: theme.fn.getSize($radius, theme.radius),
		overflow: 'hidden'
	}),
	({ theme, $color, $radius, $indeterminate, $animated }) =>
		($indeterminate || $animated) && {
			'&::after': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: '-20%',
				right: '-20%',
				height: '100%',
				background: `linear-gradient(90deg, transparent, ${theme.fn.getAlphaColor(
					theme.fn.getOnColor($color),
					'fadedOnBase'
				)})`,
				borderRadius: theme.fn.getSize($radius, theme.radius),
				animation: `${pulse} 1.5s ease-out 0.5s infinite`
			}
		},
	({ theme, $color, $indeterminate }) =>
		$indeterminate && {
			width: '100% !important',
			background: 'transparent',
			'&::after': {
				background: `linear-gradient(90deg, transparent, ${theme.fn.getColor($color)})`
			}
		}
)
