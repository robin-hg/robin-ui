import styled from '@robin-ui/styles'

interface CircleProps {
  checked: boolean
  $color: string
  $error: boolean
}

export const Circle = styled.input<CircleProps>(
  ({ theme }) => ({
    appearance: 'none',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.8rem',
    height: '1.8rem',
    border: '0.1rem solid transparent',
    borderRadius: '100%',
    outline: '0.2rem solid transparent',
    outlineOffset: '0.2rem',
    transition: theme.fn.getTransition(),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '0.8rem',
      height: '0.8rem',
      borderRadius: '100%',
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
      '&::before': {
        background: onColor,
        transform: `translate(-50%, -50%) scale(${checked ? 1 : 0})`
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
      background: `${theme.fn.getAlphaColor('surface.onBase', 'disabled')} !important`,
      borderColor: `${theme.fn.getMixedColor(
        'surface.base',
        'surface.onBase',
        'disabled'
      )} !important`,
      '&::before': {
        background: `${theme.fn.getMixedColor(
          'surface.base',
          'surface.onBase',
          'disabled'
        )} !important`
      }
    }
  })
)
