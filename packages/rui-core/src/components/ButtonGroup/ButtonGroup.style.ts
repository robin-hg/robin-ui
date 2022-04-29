import type { SizeValue } from '@rui/theme'
import styled from '@rui/styles'

interface ButtonGroupContainerProps {
	$borderRadius: SizeValue
}

export const ButtonGroupContainer = styled.div<ButtonGroupContainerProps>(({ theme, $borderRadius }) => ({
	display: 'inline-flex',
	overflow: 'hidden',
	gap: '-0.1rem',
	'& > button': {
		borderRadius: 0,
		'&:first-of-type': {
			borderTopLeftRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
			borderBottomLeftRadius: theme.fn.getSize($borderRadius, theme.borderRadius)
		},
		'&:last-of-type': {
			borderTopRightRadius: theme.fn.getSize($borderRadius, theme.borderRadius),
			borderBottomRightRadius: theme.fn.getSize($borderRadius, theme.borderRadius)
		},
		'&:not(:last-of-type)': {
			borderRight: 'none'
		}
	}
}))
