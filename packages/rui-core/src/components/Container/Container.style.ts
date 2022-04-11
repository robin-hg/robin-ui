import styled from '@rui/styles'

interface StyledContainerProps {
	$maxWidth: string
}

export const StyledContainer = styled.div<StyledContainerProps>(({ theme, $maxWidth }) => ({
	boxSizing: 'content-box',
	maxWidth: $maxWidth,
	padding: `0 ${theme.spacing.md}`,
	margin: '0 auto'
}))
