import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface BoxProps {
	$state: 'disabled' | 'error' | 'active' | 'none'
	$leftPadding: number
	$rightPadding: number
}

export const Box = styled(BaseContainer)<BoxProps>(
	({ theme, $leftPadding, $rightPadding }) => ({
		position: 'relative',
		width: '100%',
		color: theme.palette.surface.onVariant,
		'& > input': {
			padding: theme.fn.getSpacing(['sm', 0]),
			paddingRight: $rightPadding || theme.spacing.md,
			paddingLeft: $leftPadding || theme.spacing.md,
			width: '100%',
			fontSize: theme.typography.text.fontSize.md,
			height: '3.6rem',
			lineHeight: '1em',
			background: theme.fn.getModifiedColor('surface', 'primary', 'base'),
			color: 'inherit',
			border: `solid 0.1rem ${theme.palette.outline}`,
			borderRadius: theme.borderRadius.sm,
			outline: 'none',
			transition: theme.fn.getTransition(),
			'&:focus': {
				borderColor: theme.fn.getColor('primary')
			},
			'::placeholder': {
				color: theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')
			},
			'&::before': {
				content: '"\\200b"'
			}
		}
	}),
	({ theme, $state }) =>
		({
			disabled: {
				color: `${theme.fn.getAlphaColor('surface.onVariant', 'disabledOnBase')} !important`,
				'& > input': {
					background: `${theme.fn.getAlphaColor('surface.variant', 'disabledBase')} !important`,
					borderColor: `${theme.fn.getAlphaColor('surface.onVariant', 'disabledBase')} !important`,
					cursor: 'default !important'
				}
			},
			error: {
				'& > input': {
					borderColor: theme.fn.getColor('critical')
				}
			},
			active: {
				'& > input': {
					borderColor: theme.fn.getColor('primary')
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
