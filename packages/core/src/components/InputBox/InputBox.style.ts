import styled from '@robin-ui/styles'
import { BaseContainer } from '../BaseContainer'

interface BoxProps {
	$state: 'disabled' | 'error' | 'active' | 'none'
	$leftPadding?: number
	$rightPadding?: number
}

export const Box = styled(BaseContainer)<BoxProps>(
	({ theme, $leftPadding, $rightPadding }) => ({
		position: 'relative',
		width: '100%',
		color: theme.palette.surface.onBase,
		'& > input, & > select': {
			padding: theme.fn.getSpacing(['sm', 0]),
			paddingRight: $rightPadding ?? theme.spacing.md,
			paddingLeft: $leftPadding ?? theme.spacing.md,
			width: '100%',
			height: '3.6rem',
			fontSize: theme.typography.text.fontSize.md,
			lineHeight: '1em',
			background: theme.fn.getModifiedColor('surface', 'tint', 'tint'),
			color: 'inherit',
			border: `0.1rem solid ${theme.palette.outline}`,
			borderRadius: theme.radius.sm,
			outline: 'none',
			transition: theme.fn.getTransition(),
			'&:focus': {
				borderColor: theme.palette.primary.base
			},
			'::placeholder': {
				color: theme.fn.getAlphaColor('surface.onBase', 'fadedOnBase')
			},
			'&::before': {
				content: '"\\200b"'
			}
		}
	}),
	({ theme, $state }) =>
		({
			disabled: {
				color: `${theme.fn.getAlphaColor('surface.onVariant', 'fadedOnBase')} !important`,
				'& > input, & > select': {
					background: `${theme.fn.getAlphaColor(
						'surface.variant',
						'fadedBase'
					)} !important`,
					borderColor: `${theme.fn.getAlphaColor('outline', 'fadedOnBase')} !important`,
					cursor: 'default !important',
					'::placeholder': {
						color: theme.fn.getAlphaColor('surface.onVariant', 'fadedOnBase')
					}
				}
			},
			error: {
				'& > input, & > select': {
					borderColor: theme.palette.critical.base
				}
			},
			active: {
				'& > input': {
					borderColor: theme.palette.primary.base
				}
			},
			none: null
		}[$state])
)

interface AdornmentProps {
	$position: 'left' | 'right'
}

export const Adornment = styled.span<AdornmentProps>(
	({ theme }) => ({
		position: 'absolute',
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing.sm,
		padding: theme.fn.getSpacing([0, 'sm'])
	}),
	({ $position }) =>
		({
			left: {
				left: 0
			},
			right: {
				right: 0
			}
		}[$position])
)
