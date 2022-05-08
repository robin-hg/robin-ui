import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'
import { Collapse } from '../Transition'

export const AccordionContainer = styled(BaseContainer)(({ theme }) => ({
	borderBottom: `solid 0.1rem ${theme.palette.outline}`
}))

interface AccordionSummaryProps {
	$open: boolean
	$expandable: boolean
}

export const AccordionSummary = styled.button<AccordionSummaryProps>(({ theme, $expandable, $open }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	minHeight: '4rem',
	background: 'transparent',
	padding: theme.fn.getSpacing(['sm', 'md']),
	cursor: $expandable ? 'pointer' : 'default',
	userSelect: 'none',
	outline: '0.2rem solid transparent',
	border: 'none',
	color: 'inherit',
	transition: theme.fn.getTransition(['background', 'color']),
	'&:hover': {
		background: theme.fn.getAlphaColor('surface.onVariant', 'hover')
	},
	'&:focus-visible': {
		background: theme.fn.getAlphaColor('surface.onVariant', 'focus'),
		outlineColor: theme.palette.primary.base
	},
	'&:active': {
		background: theme.fn.getAlphaColor('surface.onVariant', 'active')
	},
	'&[disabled]': {
		background: `${theme.fn.getAlphaColor('surface.onVariant', 'disabledBase')} !important`,
		color: `${theme.fn.getAlphaColor('surface.onVariant', 'disabledOnBase')} !important`
	},
	'& > svg': {
		transition: theme.fn.getTransition(),
		transform: `rotate(${$open ? 180 : 0}deg)`
	}
}))

export const AccordionContent = styled(Collapse)(({ theme }) => ({
	padding: theme.spacing.md
}))
