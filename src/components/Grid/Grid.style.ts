import styled, { css } from '@rui/style'

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
			${props.theme.media.lg} {
				grid-template-columns: repeat(${props.$lg}, 1fr);
			}
		`}

	${props =>
		props.$md &&
		css`
			${props.theme.media.md} {
				grid-template-columns: repeat(${props.$md}, 1fr);
			}
		`}

	${props =>
		props.$sm &&
		css`
			${props.theme.media.sm} {
				grid-template-columns: repeat(${props.$sm}, 1fr);
			}
		`}

	& > * {
		min-width: 0;
	}
`
