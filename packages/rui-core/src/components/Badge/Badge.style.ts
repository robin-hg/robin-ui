import type { ColorToken, SizeValue } from '@rui/theme'
import styled from '@rui/styles'

export const BadgeContainer = styled.div({
	position: 'relative',
	display: 'inline-block'
})

interface BadgeCircleProps {
	$position: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
	$color: ColorToken
	$size: SizeValue
	$small: boolean
}

export const BadgeCircle = styled.div<BadgeCircleProps>(
	({ theme, $color, $size }) => ({
		position: 'absolute',
		zIndex: 2,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.fn.getSpacing([0, $size]),
		width: 'auto',
		height: theme.fn.getSize($size, theme.size),
		minWidth: theme.fn.getSize($size, theme.size),
		fontSize: theme.fn.getSize($size, theme.typography.label.fontSize),
		color: theme.fn.getOnColor($color),
		background: theme.fn.getColor($color),
		borderRadius: theme.borderRadius.xl,
		transition: theme.fn.getTransition()
	}),
	({ $position, $small }) =>
		({
			'top-start': {
				top: 0,
				left: 0,
				transform: `translate(-40%, -40%) scale(${$small ? 0.8 : 1})`
			},
			'top-end': {
				top: 0,
				right: 0,
				transform: `translate(40%, -40%) scale(${$small ? 0.8 : 1})`
			},
			'bottom-start': {
				bottom: 0,
				left: 0,
				transform: `translate(-40%, 40%) scale(${$small ? 0.8 : 1})`
			},
			'bottom-end': {
				bottom: 0,
				right: 0,
				transform: `translate(40%, 40%) scale(${$small ? 0.8 : 1})`
			}
		}[$position])
)
