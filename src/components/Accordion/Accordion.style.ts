import styled, { css } from '@rui/style'
import Expand from '@rui/components/Expand'
import Paper from '@rui/components/Paper'

interface AccordionContainerProps {
	$disabled: boolean
}

export const AccordionContainer = styled(Paper)<AccordionContainerProps>`
	background: ${props => (props.$disabled ? props.theme.paper.disabled : props.theme.paper.base)};
`

interface AccordionSummaryProps {
	$open: boolean
	$expandable: boolean
	$disabled: boolean
}

export const AccordionSummary = styled.div<AccordionSummaryProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 4rem;
	padding: 0.4rem 1.6rem;
	cursor: ${props => (props.$expandable ? 'pointer' : 'default')};
	user-select: none;
	background: ${props => props.theme.paper.base};
	outline: none;
	transition: background 200ms ease-in;

	@media (hover: hover) {
		&:hover {
			background: ${props => props.theme.paper.secondary};
		}
	}

	&:focus-visible {
		background: ${props => props.theme.paper.secondary};
	}

	${props =>
		props.$disabled &&
		css`
			color: ${props.theme.typography.colors.disabled} !important;
			background: ${props.theme.paper.disabled} !important;
		`}

	& > svg {
		transition: all 200ms ease-out;
		transform: rotate(${props => (props.$open ? 180 : 0)}deg);
	}
`

export const AccordionContent = styled(Expand)`
	cursor: auto;

	& > div {
		padding: 1.6rem;
	}
`
