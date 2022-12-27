import type { ColorToken } from '@robin-ui/theme'
import { styled } from '@robin-ui/styles'

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
    width: '3.6rem',
    height: '1.8rem',
    border: '0.1rem solid transparent',
    borderRadius: theme.radius.xl,
    outline: '0.2rem solid transparent',
    outlineOffset: '0.2rem',
    transition: theme.fn.getTransition(),
    '&::after': {
      content: '""',
      width: '1.2rem',
      height: '1.2rem',
      border: '0.1rem solid transparent',
      borderRadius: 'inherit',
      transition: theme.fn.getTransition()
    }
  }),
  ({ theme, checked, $color, $error }) => {
    const color = $error ? (checked ? 'critical' : 'critical.variant') : $color
    const onColor = theme.fn.getOnColor(checked ? color : 'surface.base')
    const borderColor = $error ? 'critical' : color

    return {
      background:
        checked || $error
          ? theme.fn.getColor(color)
          : theme.fn.getAlphaColor('surface.base', 'faded'),
      borderColor: theme.fn.getColor(checked || $error ? borderColor : 'outline'),
      '::after': {
        background: onColor,
        transform: `translateX(${checked ? 8 : -8}px)`
      },
      '&:hover': {
        background:
          checked || $error
            ? theme.fn.getMixedColor(color, onColor, 'hover')
            : theme.fn.getAlphaColor(color, 'hover'),
        borderColor: theme.fn.getMixedColor(borderColor, onColor, 'hover')
      },
      '&:focus-visible': {
        outlineColor: theme.fn.getColor($color),
        borderColor: theme.fn.getMixedColor(borderColor, onColor, 'focus')
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
      '&::after': {
        background: `${theme.fn.getMixedColor(
          'surface.base',
          'surface.onBase',
          'disabled'
        )} !important`
      },
      background: `${theme.fn.getAlphaColor('surface.base', 'disabled')} !important`,
      borderColor: `${theme.fn.getMixedColor('surface.base', 'outline', 'disabled')} !important`
    }
  })
)
