import type { ColorToken, SizeValue } from '@robin-ui/theme'
import { keyframes, styled } from '@robin-ui/styles'

const defaultSizes = {
  xs: '1.6rem',
  sm: '2rem',
  md: '2.4rem',
  lg: '3.2rem',
  xl: '4.4rem'
}

const defaultThickness = {
  xs: '0.1rem',
  sm: '0.2rem',
  md: '0.2rem',
  lg: '0.3rem',
  xl: '0.4rem'
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

interface SpinnerContainerProps {
  $color: ColorToken
  $size: SizeValue
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>(({ theme, $color, $size }) => ({
  position: 'relative',
  display: 'inline-block',
  color: theme.fn.getColor($color),
  width: theme.fn.getSize($size, defaultSizes),
  height: theme.fn.getSize($size, defaultSizes)
}))

interface StyledSpinnerProps {
  $speed: string
  $thickness?: SizeValue
  $trail?: boolean
  $custom?: boolean
}

export const StyledSpinner = styled.div<StyledSpinnerProps>(
  ({ theme, $speed }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'inline-block',
    borderRadius: theme.radius.xl,
    animation: `${spin} ${$speed} linear infinite`
  }),
  ({ theme, $custom, $thickness = 'md', $trail }) =>
    !$custom && {
      border: `${theme.fn.getSize($thickness, defaultThickness)} solid transparent`,
      borderTopColor: 'currentColor',
      borderRightColor: 'currentColor',
      opacity: $trail ? 0.5 : 1
    }
)
