import styled, { css, media } from 'style'

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
				${media.lg(props)} {
					grid-column: auto / span ${props.$lg};
				}
			`}

		${props =>
			props.$md &&
			css`
				${media.md(props)} {
					grid-column: auto / span ${props.$md};
				}
			`}

		${props =>
			props.$sm &&
			css`
				${media.sm(props)} {
					grid-column: auto / span ${props.$sm};
				}
			`}
	}
`
