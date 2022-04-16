import styled from '@rui/styles'
import { Expand } from '../Expand'

interface AccordionSummaryProps {
	$open: boolean
	$expandable: boolean
	$disabled: boolean
}

export const AccordionSummary = styled.div<AccordionSummaryProps>(
	({ theme, $expandable, $open }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		minHeight: '4rem',
		padding: theme.fn.getSpacing([theme.spacing.sm, theme.spacing.md]),
		cursor: $expandable ? 'pointer' : 'default',
		userSelect: 'none',
		outline: 'none',
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
	cursor: 'auto',
	borderBottom: `solid 0.1rem ${theme.palette.outline}`,
	'& > div': {
		padding: theme.spacing.md
	}
}))
