import type { SizeValue, ColorToken } from '@robin-ui/types'
import styled from '@robin-ui/styles'
import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
	$variant: 'flat' | 'elevated' | 'outlined'
	$surfaceColor: 'base' | 'variant'
	$tint: ColorToken
	$elevation: number
	$padding: SizeValue | SizeValue[]
	$radius: SizeValue
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>(
	({ theme, $padding, $radius, $surfaceColor, $tint }) => ({
		position: 'relative',
		zIndex: 0,
		boxSizing: 'border-box',
		overflow: 'hidden',
		padding: theme.fn.getSpacing($padding),
		background: theme.fn.getModifiedColor(`surface.${$surfaceColor}`, $tint, 'tint'),
		color: theme.fn.getOnColor(`surface.${$surfaceColor}`),
		border: '0.1rem solid transparent',
		borderRadius: theme.fn.getSize($radius, theme.radius),
		transition: theme.fn.getTransition(),
		'&::-webkit-scrollbar': {
			width: '1rem',
			background: theme.fn.getAlphaColor('surface.variant', 'fadedOnBase')
		},
		'&::-webkit-scrollbar-thumb': {
			background: theme.fn.getAlphaColor('surface.onVariant', 0.5),
			'&:active': {
				background: theme.fn.getAlphaColor('surface.onVariant', 0.6)
			}
		}
	}),
	({ theme, $variant, $elevation }) =>
		({
			flat: {},
			elevated: {
				boxShadow: theme.shadow.generateShadow($elevation)
			},
			outlined: {
				borderColor: theme.palette.outline
			}
		}[$variant])
)
