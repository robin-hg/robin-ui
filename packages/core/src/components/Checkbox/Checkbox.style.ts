import { styled } from '@robin-ui/styles'
import type { ColorToken } from '@robin-ui/theme'

interface BoxProps {
  checked: boolean
  $color: ColorToken
  $error: boolean
}

export const Box = styled.input<BoxProps>(
  ({ theme }) => ({
    appearance: 'none',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.8rem',
    height: '1.8rem',
    border: '0.1rem solid transparent',
    borderRadius: theme.radius.sm,
    outline: '0.2rem solid transparent',
    outlineOffset: '0.2rem',
    transition: theme.fn.getTransition(),
    '& + svg': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      transition: theme.fn.getTransition()
    }
  }),
  ({ theme, checked, $color, $error }) => {
    const color = $error ? (checked ? 'critical' : 'critical.variant') : $color
    const onColor = theme.fn.getOnColor(color)
    const borderColor = $error ? 'critical' : color

    return {
      background: checked || $error ? theme.fn.getColor(color) : 'transparent',
      borderColor: theme.fn.getColor(checked || $error ? borderColor : 'outline'),
      '& + svg': {
        color: onColor,
        opacity: checked ? 1 : 0
      },
      '&:hover': {
        background:
          checked || $error
            ? theme.fn.getMixedColor(color, onColor, 'hover')
            : theme.fn.getAlphaColor(color, 'hover'),
        borderColor: theme.fn.getMixedColor(borderColor, onColor, 'hover')
      },
      '&:focus-visible': {
        borderColor: theme.fn.getMixedColor(borderColor, onColor, 'focus'),
        outlineColor: theme.fn.getColor($color)
      },
      '&:active': {
        background:
          checked || $error
            ? theme.fn.getMixedColor(color, onColor, 'active')
            : theme.fn.getAlphaColor(color, 'active'),
        borderColor: theme.fn.getMixedColor(borderColor, onColor, 'active')
      }
    }
  },
  ({ theme }) => ({
    '&[disabled]': {
      background: `${theme.fn.getAlphaColor('surface.base', 'disabled')} !important`,
      borderColor: `${theme.fn.getMixedColor('surface.base', 'outline', 'disabled')} !important`,
      '& + svg': {
        color: `${theme.fn.getMixedColor('surface.base', 'surface.onBase', 'disabled')} !important`
      }
    }
  })
)
