import { styled } from '@robin-ui/styles'
import type { ColorToken, SizeValue } from '@robin-ui/types'

interface StyledTextProps {
  $variant: 'heading' | 'text' | 'label' | 'code'
  $size: SizeValue
  $color: ColorToken
  $highlight: ColorToken
  $bold: boolean
  $italic: boolean
  $decoration: string
  $fontSize?: string | number
  $fontWeight?: number
}

export const StyledText = styled.div<StyledTextProps>(
  ({
    theme,
    $variant,
    $size,
    $color,
    $decoration,
    $highlight,
    $fontSize,
    $fontWeight,
    $italic,
    $bold
  }) => ({
    display: 'block',
    margin: 0,
    fontFamily: theme.typography[$variant].fontFamily,
    fontWeight: $fontWeight ?? ($bold ? 'bold' : theme.typography[$variant].fontWeight),
    fontSize: $fontSize ? $fontSize : theme.fn.getSize($size, theme.typography[$variant].fontSize),
    fontStyle: $italic ? 'italic' : 'normal',
    lineHeight: theme.typography[$variant].lineHeight,
    color: theme.fn.getColor($color),
    textDecoration: $decoration,
    letterSpacing: 'normal',
    background: theme.fn.getColor($highlight),
    transition: theme.fn.getTransition(),
    '& small': {
      fontSize: '0.7em'
    }
  }),
  ({ theme, $variant }) =>
    $variant === 'code' && {
      display: 'inline-block',
      padding: theme.fn.getSpacing(['xs']),
      background: theme.fn.getMixedColor('surface.base', 'tint', 'surfaceTint'),
      borderRadius: theme.radius.sm
    }
)
