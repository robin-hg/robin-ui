import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
	$variant: 'base' | 'variant'
	$tint: string
	$elevation: number
	$outlined: boolean
	$padding: SizeValue | SizeValue[]
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>(
	({ theme, $elevation, $padding }) => ({
		position: 'relative',
		zIndex: 0,
		boxSizing: 'border-box',
		overflow: 'hidden',
		padding: theme.fn.getSpacing($padding),
		transition: theme.fn.getTransition(),
		borderRadius: theme.borderRadius,
		boxShadow: theme.shadow.generateShadow($elevation)
	}),
	({ theme, $variant, $tint }) =>
		({
			base: {
				background: theme.fn.getColorTint('surface', $tint, 'tint'),
				color: theme.palette.surface.onBase
			},
			variant: {
				background: theme.fn.getColorTint('surface.variant', $tint, 'tint'),
				color: theme.palette.surface.onVariant
			}
		}[$variant]),
	({ theme, $outlined }) =>
		$outlined && {
			border: `solid 0.1rem ${theme.palette.outline}`
		}
)
