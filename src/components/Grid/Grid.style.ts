import styled, { css, media } from 'style'

interface GridContainerProps {
	$sm?: number
	$md?: number
	$lg?: number
	$xl: number
	$spacing: string
}

export const GridContainer = styled.div<GridContainerProps>`
	display: grid;
	grid-template-columns: repeat(${props => props.$xl}, 1fr);
	grid-gap: ${props => props.$spacing};
	width: 100%;

	${props =>
		props.$lg &&
		css`
			${media.lg(props)} {
				grid-template-columns: repeat(${props.$lg}, 1fr);
			}
		`}

	${props =>
		props.$md &&
		css`
			${media.md(props)} {
				grid-template-columns: repeat(${props.$md}, 1fr);
			}
		`}

	${props =>
		props.$sm &&
		css`
			${media.sm(props)} {
				grid-template-columns: repeat(${props.$sm}, 1fr);
			}
		`}

	& > * {
		min-width: 0;
	}
`
