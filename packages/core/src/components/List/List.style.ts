import type { SizeValue } from '@robin-ui/theme'
import styled from '@robin-ui/styles'

interface StyledListProps {
  $spacing: SizeValue
  $styleType: React.CSSProperties['listStyleType']
}

export const StyledList = styled.ul<StyledListProps>(({ theme, $spacing, $styleType }) => ({
  marginInlineStart: $styleType === 'none' ? 0 : '2ch',
  listStyleType: $styleType,
  '& > li:not(:first-of-type)': {
    marginTop: theme.fn.getSpacing($spacing)
  }
}))
