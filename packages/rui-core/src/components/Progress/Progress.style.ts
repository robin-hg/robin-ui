import type { ColorToken, SizeValue } from '@rui/theme'
import styled, { keyframes } from '@rui/styles'

const pulse = keyframes`
	from {
		transform: translateX(-100%);
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	to {
		transform: translateX(100%);
		opacity: 0;
	}
`

interface TrackProps {
	$thickness: SizeValue
	$trackColor: ColorToken
	$borderRadius: SizeValue
}

export const Track = styled.div<TrackProps>(({ theme, $thickness, $trackColor, $borderRadius }) => ({
	width: '100%',
	height: theme.fn.getSize($thickness, theme.spacing),
	overflow: 'hidden',
	background: theme.fn.getColor($trackColor),
	borderRadius: theme.fn.getSize($borderRadius, theme.borderRadius)
}))

interface BarProps {
	$color: string
	$borderRadius: SizeValue
	$animated: boolean
	$fullWidth: number
}

export const Bar = styled.div<BarProps>(
	({ theme, $color, $borderRadius }) => ({
		position: 'relative',
		height: '100%',
		background: theme.fn.getColor($color),
		transition: theme.fn.getTransition(),
		borderRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
		overflow: 'hidden'
	}),
	({ theme, $color, $borderRadius, $animated, $fullWidth }) =>
		$animated && {
			'&:after': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				width: `${$fullWidth}px`,
				height: '100%',
				background: `linear-gradient(90deg, transparent, ${theme.fn.getAlphaColor(
					theme.fn.getOnColor($color),
					0.5
				)})`,
				borderRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
				animation: `${pulse} 2s linear 0.5s infinite`
			}
		}
)
