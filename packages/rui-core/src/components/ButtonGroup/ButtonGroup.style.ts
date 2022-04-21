import styled from '@rui/styles'

export const ButtonGroupContainer = styled.div(({ theme }) => ({
	display: 'inline-block',
	overflow: 'hidden',
	'& > button': {
		borderRadius: 0,
		'&:first-child': {
			borderTopLeftRadius: theme.borderRadius,
			borderBottomLeftRadius: theme.borderRadius
		},
		'&:last-child': {
			borderTopRightRadius: theme.borderRadius,
			borderBottomRightRadius: theme.borderRadius
		},
		'&:not(:last-child)': {
			marginRight: '-0.1rem',
			borderRight: 'none'
		}
	}
}))
