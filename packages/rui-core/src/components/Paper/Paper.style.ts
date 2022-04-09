import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
	$variant: 'base' | 'variant'
	$tint: string
	$elevation: number
	$outlined: boolean
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>(
	({ theme, $tint, $elevation }) => ({
		position: 'relative',
		boxSizing: 'border-box',
		overflow: 'hidden',
		transition: theme.fn.getTransition(),
		borderRadius: theme.borderRadius,
		boxShadow: theme.shadow.generateShadow($elevation),
		['::before']: {
			content: '""',
			position: 'absolute',
			height: '100%',
			width: '100%',
			background: theme.fn.getColorAlpha($tint, theme.colorModifiers.tint)
		}
	}),
	({ theme, $variant }) =>
		theme.fn.getVariant(
			{
				base: {
					background: theme.palette.surface.base,
					color: theme.palette.surface.onBase
				},
				variant: {
					background: theme.palette.surface.variant,
					color: theme.palette.surface.onVariant
				}
			},
			$variant
		),
	({ theme, $outlined }) =>
		$outlined && {
			border: `solid 0.1rem ${theme.palette.outline}`
		}
)
