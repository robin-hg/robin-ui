import type { SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

interface GridContainerProps {
	$xs?: number
	$sm?: number
	$md?: number
	$lg?: number
	$xl: number
	$spacing: SizeValue | [SizeValue, SizeValue]
}

export const GridContainer = styled.div<GridContainerProps>(
	({ theme, $spacing, $xl }) => ({
		display: 'grid',
		gridTemplateColumns: `repeat(${$xl}, 1fr)`,
		gap: theme.fn.getSpacing($spacing),
		width: '100%',
		'& > *': {
			minWidth: 0
		}
	}),
	({ theme, $lg }) =>
		$lg && {
			[theme.media.lg]: {
				gridTemplateColumns: `repeat(${$lg}, 1fr)`
			}
		},
	({ theme, $md }) =>
		$md && {
			[theme.media.md]: {
				gridTemplateColumns: `repeat(${$md}, 1fr)`
			}
		},
	({ theme, $sm }) =>
		$sm && {
			[theme.media.sm]: {
				gridTemplateColumns: `repeat(${$sm}, 1fr)`
			}
		},
	({ theme, $xs }) =>
		$xs && {
			[theme.media.xs]: {
				gridTemplateColumns: `repeat(${$xs}, 1fr)`
			}
		}
)
