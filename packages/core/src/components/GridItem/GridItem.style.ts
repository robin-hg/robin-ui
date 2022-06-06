import styled from '@robin-ui/styles'

interface GridItemContainerProps {
	$xs?: number
	$sm?: number
	$md?: number
	$lg?: number
	$xl: number
}

export const GridItemContainer = styled.div<GridItemContainerProps>(
	({ $xl }) => ({
		gridColumn: `auto / span ${$xl}`
	}),
	({ theme, $lg }) =>
		$lg && {
			[theme.media.lg]: {
				gridColumn: `auto / span ${$lg}`
			}
		},
	({ theme, $md }) =>
		$md && {
			[theme.media.md]: {
				gridColumn: `auto / span ${$md}`
			}
		},
	({ theme, $sm }) =>
		$sm && {
			[theme.media.sm]: {
				gridColumn: `auto / span ${$sm}`
			}
		},
	({ theme, $xs }) =>
		$xs && {
			[theme.media.xs]: {
				gridColumn: `auto / span ${$xs}`
			}
		}
)
