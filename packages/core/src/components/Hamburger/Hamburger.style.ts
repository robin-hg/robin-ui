import type { Size } from '@robin-ui/theme'
import styled from '@robin-ui/styles'
import { IconButton } from '../IconButton'

const defaultSizes = {
  xs: '1.6rem',
  sm: '2rem',
  md: '2.4rem',
  lg: '3.2rem',
  xl: '4.4rem'
}

const defaultLineWidth = {
  xs: '0.1rem',
  sm: '0.2rem',
  md: '0.2rem',
  lg: '0.3rem',
  xl: '0.4rem'
}

export const StyledButton = styled(IconButton)(({ theme }) => ({
  boxSizing: 'content-box',
  padding: theme.spacing.xs
}))

interface LinesProp {
  $open: boolean
  $size: Size
}

export const Lines = styled.div<LinesProp>(
  ({ theme, $size }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: defaultSizes[$size],
    height: defaultSizes[$size],
    '& > span': {
      display: 'block',
      width: '100%',
      height: defaultLineWidth[$size],
      background: 'currentColor',
      borderRadius: theme.radius.xl,
      transition: theme.fn.getTransition(),
      '&::before': {
        content: '""',
        position: 'absolute',
        top: `calc(${defaultLineWidth[$size]} * 2)`,
        left: 0,
        width: '100%',
        height: defaultLineWidth[$size],
        background: 'currentColor',
        borderRadius: 'inherit',
        transformOrigin: 'center',
        transition: 'transform 100ms ease-out, top 100ms 100ms ease-out'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: `calc(${defaultLineWidth[$size]} * 2)`,
        left: 0,
        width: '100%',
        height: defaultLineWidth[$size],
        background: 'currentColor',
        borderRadius: 'inherit',
        transformOrigin: 'center',
        transition: 'transform 100ms ease-out, bottom 100ms 100ms ease-out'
      }
    }
  }),
  ({ $open }) =>
    $open && {
      '& > span': {
        background: 'transparent',
        '&::before': {
          top: '50%',
          transform: 'rotate(45deg) translateY(-50%)',
          transition: 'top 100ms ease-out, transform 100ms 100ms ease-out'
        },
        '&::after': {
          bottom: '50%',
          transform: `rotate(-45deg) translateY(50%)`,
          transition: 'bottom 100ms ease-out, transform 100ms 100ms ease-out'
        }
      }
    }
)
