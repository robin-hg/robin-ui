import type { SizeValue } from '@rui/theme'
import styled, { keyframes } from '@rui/styles'

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

interface SkeletonContainerProps {
	$animated: boolean
	$loading: boolean
	$radius: SizeValue
}

export const SkeletonContainer = styled.div<SkeletonContainerProps>(
	({ theme, $loading, $animated, $radius }) =>
		$loading && {
			position: 'relative',
			overflow: 'hidden',
			color: 'transparent',
			background: theme.palette.surface.variant,
			borderRadius: theme.fn.getSize($radius, theme.radius),
			'&::after': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: '-20%',
				right: '-20%',
				height: '100%',
				background: `linear-gradient(90deg, transparent, ${theme.fn.getAlphaColor(
					theme.palette.surface.onVariant,
					'disabledBase'
				)})`,
				borderRadius: theme.fn.getSize($radius, theme.radius),
				animation: $animated ? `${pulse} 1.5s ease-out 0.5s infinite` : 'none'
			},
			'& > *': {
				visibility: 'hidden'
			}
		}
)
