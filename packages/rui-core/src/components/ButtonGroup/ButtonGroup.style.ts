import type { SizeValue } from '@rui/theme'
import styled from '@rui/styles'

interface ButtonGroupContainerProps {
	$borderRadius: SizeValue
}

export const ButtonGroupContainer = styled.div<ButtonGroupContainerProps>(({ theme, $borderRadius }) => ({
	display: 'inline-block',
	overflow: 'hidden',
	'& > button': {
		borderRadius: 0,
		'&:first-child': {
			borderTopLeftRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
			borderBottomLeftRadius: theme.fn.getSize($borderRadius, theme.borderRadius)
		},
		'&:last-child': {
			borderTopRightRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
			borderBottomRightRadius: theme.fn.getSize($borderRadius, theme.borderRadius)
		},
		'&:not(:last-child)': {
			marginRight: '-0.1rem',
			borderRight: 'none'
		}
	}
}))
