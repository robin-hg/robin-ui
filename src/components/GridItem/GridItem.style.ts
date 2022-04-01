import styled, { css } from '@rui/style'

interface GridItemContainerProps {
	$sm?: number
	$md?: number
	$lg?: number
	$xl: number
}

export const GridItemContainer = styled.div<GridItemContainerProps>`
	&& {
		grid-column: auto / span ${props => props.$xl};

		${props =>
			props.$lg &&
			css`
				${props.theme.media.lg} {
					grid-column: auto / span ${props.$lg};
				}
			`}

		${props =>
			props.$md &&
			css`
				${props.theme.media.md} {
					grid-column: auto / span ${props.$md};
				}
			`}

		${props =>
			props.$sm &&
			css`
				${props.theme.media.sm} {
					grid-column: auto / span ${props.$sm};
				}
			`}
	}
`
