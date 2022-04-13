import styled from '@rui/styles'

export const StyledBaseContainer = styled.div(({ theme }) => ({
	fontFamily: theme.typography.text.fontFamily,
	fontWeight: theme.typography.text.fontWeight,
	fontSize: theme.typography.text.fontSize.md,
	lineHeight: theme.typography.text.lineHeight.md,
	color: theme.palette.background.onBase
}))
