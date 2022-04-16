import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'

interface StyledContainerProps {
	$maxWidth: SizeValue
}

export const StyledContainer = styled.div<StyledContainerProps>(({ theme, $maxWidth }) => ({
	boxSizing: 'content-box',
	maxWidth: theme.fn.getSize($maxWidth, theme.breakpoints),
	padding: `0 ${theme.fn.getSpacing('md')}`,
	margin: '0 auto'
}))
