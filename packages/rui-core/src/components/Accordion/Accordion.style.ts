import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'
import { Expand } from '../Expand'

export const AccordionContainer = styled(BaseContainer)(({ theme }) => ({
	borderBottom: `solid 0.1rem ${theme.palette.outline}`
}))

interface AccordionSummaryProps {
	$open: boolean
	$expandable: boolean
	$disabled: boolean
}

export const AccordionSummary = styled.button<AccordionSummaryProps>(
	({ theme, $expandable, $open }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		minHeight: '4rem',
		background: 'transparent',
		padding: theme.fn.getSpacing(['sm', 'md']),
		cursor: $expandable ? 'pointer' : 'default',
		userSelect: 'none',
		outline: 'none',
		border: 'none',
		transition: theme.fn.getTransition(),
		'&:hover': {
			background: theme.fn.getColorTint('surface', 'surface.onBase', 'hover')
		},
		'&:focus-visible': {
			background: theme.fn.getColorTint('surface', 'surface.onBase', 'focus')
		},
		'& > svg': {
			transition: theme.fn.getTransition(),
			transform: `rotate(${$open ? 180 : 0}deg)`
		}
	}),
	({ theme, $disabled }) =>
		$disabled && {
			background: `${theme.fn.getColorTint('surface', 'surface.onBase', 'disabledBase')} !important`,
			color: `${theme.fn.getColorTint('surface', 'surface.onBase', 'disabledOnBase')} !important`
		}
)

export const AccordionContent = styled(Expand)(({ theme }) => ({
	padding: theme.fn.getSpacing('md')
}))
