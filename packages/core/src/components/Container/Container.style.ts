import type { SizeValue } from '@robin-ui/types'
import { styled } from '@robin-ui/styles'

interface StyledContainerProps {
  $maxWidth: SizeValue
}

export const StyledContainer = styled.div<StyledContainerProps>(({ theme, $maxWidth }) => ({
  boxSizing: 'content-box',
  maxWidth: theme.fn.getSize($maxWidth, theme.breakpoints),
  padding: theme.fn.getSpacing([0, 'md']),
  margin: '0 auto'
}))
