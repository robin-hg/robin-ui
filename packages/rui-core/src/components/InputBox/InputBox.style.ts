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
		'& > input, & > div': {
			padding: theme.fn.getSpacing(['sm', 0]),
			paddingRight: $rightPadding || theme.spacing.md,
			paddingLeft: $leftPadding || theme.spacing.md,
			width: '100%',
			fontSize: 'inherit',
			lineHeight: 'inherit',
			background: theme.fn.getModifiedColor('surface.variant', 'primary', 'base'),
			color: theme.palette.surface.onVariant,
			border: `solid 0.1rem ${theme.palette.outline}`,
			borderRadius: theme.borderRadius.sm,
			outline: 'none',
			transition: theme.fn.getTransition(),
			'&:focus': {
				borderColor: theme.fn.getColor('primary')
			}
		}
	}),
	({ theme, $state }) => ({
		'& > input, & > div': {
			disabled: {
				color: theme.fn.getAlphaColor('surface.onVariant', 'disabledOnBase'),
				background: theme.fn.getAlphaColor('surface.variant', 'disabledBase'),
				cursor: 'not-allowed'
			},
			error: {
				borderColor: theme.fn.getColor('critical')
			},
			active: {
				borderColor: theme.fn.getColor('primary')
			},
			none: null
		}[$state]
	})
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
