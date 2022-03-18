import styled from 'style'
import { Expand, Paper } from 'index'

interface AccordionContainerProps {
	$disabled: boolean
}

export const AccordionContainer = styled(Paper)<AccordionContainerProps>`
	background: ${props => (props.disabled ? props.theme.colors.grey[500] : props.theme.colors.paper.primary)};
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
	padding: 0.5rem 1.5rem;
	font-weight: ${props => props.theme.typography.fontWeights.bold};
	color: ${props => (props.$disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary)};
	cursor: ${props => (props.$expandable && !props.$disabled ? 'pointer' : 'default')};
	user-select: none;

	&:focus-visible {
		background: ${props => props.theme.colors.paper.secondary};
		outline: none;
	}

	& > svg {
		transition: all 200ms ease-out;
		transform: rotate(${props => (props.$open ? 180 : 0)}deg);
	}
`

export const AccordionContent = styled(Expand)`
	cursor: auto;

	& > div {
		padding: 0.5rem 1.5rem 1.5rem;
	}
`
