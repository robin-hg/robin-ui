import type { ColorToken, Size, SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

interface TagContainerProps {
  $variant: 'filled' | 'faded' | 'outlined'
  $color: ColorToken
  $size: Size
  $radius: SizeValue
}

export const TagContainer = styled.span<TagContainerProps>(
  ({ theme, $size, $color, $radius }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.fn.getSpacing(['xs', 'sm']),
    overflow: 'hidden',
    fontFamily: theme.typography.label.fontFamily,
    fontSize: theme.typography.label.fontSize[$size],
    fontWeight: theme.typography.label.fontWeight,
    lineHeight: theme.typography.label.lineHeight[$size],
    color: theme.fn.getOnColor($color),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderRadius: theme.fn.getSize($radius, theme.radius),
    '&::before': {
      content: '"\\200b"'
    },
    '& svg': {
      width: 'auto',
      height: '1.2em'
    }
  }),
  ({ theme, $variant, $color }) =>
    ({
      filled: {
        background: theme.fn.getColor($color),
        color: theme.fn.getOnColor($color)
      },
      faded: {
        background: theme.fn.getAlphaColor($color, 'faded'),
        color: theme.fn.getColor($color)
      },
      outlined: {
        background: 'transparent',
        color: theme.fn.getColor($color),
        border: `0.1rem solid ${theme.fn.getColor($color)}`
      }
    }[$variant])
)
