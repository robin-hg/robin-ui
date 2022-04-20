import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
	$variant: 'flat' | 'elevated' | 'outlined'
	$surfaceColor: 'base' | 'variant'
	$tint: string
	$elevation: number
	$padding: SizeValue | SizeValue[]
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>(
	({ theme, $padding }) => ({
		position: 'relative',
		zIndex: 0,
		boxSizing: 'border-box',
		overflow: 'hidden',
		padding: theme.fn.getSpacing($padding),
		transition: theme.fn.getTransition(),
		borderRadius: theme.borderRadius
	}),
	({ theme, $surfaceColor, $tint }) =>
		({
			base: {
				background: theme.fn.getTintColor('surface', $tint),
				color: theme.palette.surface.onBase
			},
			variant: {
				background: theme.fn.getTintColor('surface.variant', $tint),
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
				border: `solid 0.1rem ${theme.palette.outline}`
			}
		}[$variant])
)
