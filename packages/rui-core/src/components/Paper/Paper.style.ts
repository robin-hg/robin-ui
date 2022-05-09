import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
	$variant: 'flat' | 'elevated' | 'outlined'
	$surfaceColor: 'base' | 'variant'
	$tint: string
	$elevation: number
	$padding: SizeValue | SizeValue[]
	$radius: SizeValue
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>(
	({ theme, $padding, $radius }) => ({
		position: 'relative',
		zIndex: 0,
		boxSizing: 'border-box',
		overflow: 'hidden',
		padding: theme.fn.getSpacing($padding),
		transition: theme.fn.getTransition(),
		border: '0.1rem solid transparent',
		borderRadius: theme.fn.getSize($radius, theme.radius)
	}),
	({ theme, $surfaceColor, $tint }) =>
		({
			base: {
				background: theme.fn.getModifiedColor('surface', $tint, 'tint'),
				color: theme.palette.surface.onBase
			},
			variant: {
				background: theme.fn.getModifiedColor('surface.variant', $tint, 'tint'),
				color: theme.palette.surface.onVariant
			}
		}[$surfaceColor]),
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
