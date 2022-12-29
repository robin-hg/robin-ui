import { styled } from '@robin-ui/styles'
import type { SizeValue } from '@robin-ui/types'

interface FlexBoxContainerProps {
  $direction: NonNullable<React.CSSProperties['flexDirection']>
  $alignItems: NonNullable<React.CSSProperties['alignItems']>
  $justifyContent: NonNullable<React.CSSProperties['justifyContent']>
  $spacing: SizeValue | [SizeValue, SizeValue]
  $wrap: boolean
}

export const FlexBoxContainer = styled.div<FlexBoxContainerProps>(
  ({ theme, $direction, $alignItems, $justifyContent, $spacing, $wrap }) => ({
    display: 'flex',
    flexDirection: $direction,
    flexWrap: $wrap ? 'wrap' : 'nowrap',
    gap: theme.fn.getSpacing($spacing),
    alignItems: $alignItems,
    justifyContent: $justifyContent
  })
)
