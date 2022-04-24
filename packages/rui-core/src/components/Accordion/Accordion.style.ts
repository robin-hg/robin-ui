import type { ColorToken } from '@rui/theme'
import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'
import { Collapse } from '../Transition'

export const AccordionContainer = styled(BaseContainer)(({ theme }) => ({
	borderBottom: `solid 0.1rem ${theme.palette.outline}`
}))

interface AccordionSummaryProps {
	$open: boolean
	$expandable: boolean
	$paperColor: ColorToken
}

export const AccordionSummary = styled.button<AccordionSummaryProps>(({ theme, $expandable, $open, $paperColor }) => ({
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
	color: 'inherit',
	transition: theme.fn.getTransition(['background', 'color']),
	'&:hover': {
		background: theme.fn.getAlphaColor(theme.fn.getOnColor($paperColor), 'hover')
	},
	'&:focus-visible': {
		background: theme.fn.getAlphaColor(theme.fn.getOnColor($paperColor), 'focus')
	},
	'&:active': {
		background: theme.fn.getAlphaColor(theme.fn.getOnColor($paperColor), 'active')
	},
	'&[disabled]': {
		background: `${theme.fn.getAlphaColor(theme.fn.getOnColor($paperColor), 'disabledBase')} !important`,
		color: `${theme.fn.getAlphaColor(theme.fn.getOnColor($paperColor), 'disabledOnBase')} !important`
	},
	'& > svg': {
		transition: theme.fn.getTransition('transform'),
		transform: `rotate(${$open ? 180 : 0}deg)`
	}
}))

export const AccordionContent = styled(Collapse)(({ theme }) => ({
	padding: theme.spacing.md
}))
