import type { SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

interface StyledTableCellProps {
  $variant: 'th' | 'td'
  $align?: 'left' | 'center' | 'right'
  $padding?: SizeValue | SizeValue[]
}

export const StyledTableCell = styled.td<StyledTableCellProps>(
  ({ theme, $variant, $align, $padding }) => ({
    fontSize:
      $variant === 'th' ? theme.typography.label.fontSize.lg : theme.typography.text.fontSize.md,
    fontWeight:
      $variant === 'th' ? theme.typography.label.fontWeight : theme.typography.text.fontWeight,
    textAlign: $align ?? 'left',
    padding: $padding && theme.fn.getSpacing($padding)
  })
)
