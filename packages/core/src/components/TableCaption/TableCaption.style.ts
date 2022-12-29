import { styled } from '@robin-ui/styles'
import type { SizeValue } from '@robin-ui/types'

interface StyledTableCaptionProps {
  $align?: 'left' | 'center' | 'right'
  $padding?: SizeValue | SizeValue[]
  $captionSide: 'top' | 'bottom'
}

export const StyledTableCaption = styled.caption<StyledTableCaptionProps>(
  ({ theme, $align, $padding, $captionSide }) => ({
    padding: $padding && theme.fn.getSpacing($padding),
    color: theme.palette.surface.onBase,
    fontSize: theme.typography.label.fontSize.lg,
    textAlign: $align ?? 'left',
    captionSide: $captionSide
  })
)
