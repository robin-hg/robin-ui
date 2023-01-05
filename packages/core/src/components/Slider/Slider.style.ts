import { styled } from '@robin-ui/styles'
import type { ColorToken, Size } from '@robin-ui/theme'

const defaultThumbSizes = {
  xs: '1.2rem',
  sm: '1.6rem',
  md: '2rem',
  lg: '2.4rem',
  xl: '2.8rem'
}

interface SliderContainerProps {
  $active: boolean
  $size: Size
}

export const SliderContainer = styled.div<SliderContainerProps>(
  ({ theme, $size }) => ({
    position: 'relative',
    padding: `calc(${theme.fn.getSize($size, defaultThumbSizes)} / 2) 0`,
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'none',
    '&[disabled]': {
      cursor: 'default !important',
      '& > div:first-of-type > div': {
        background: `${theme.fn.getMixedColor(
          'surface.base',
          'surface.onBase',
          'disabled'
        )} !important`
      }
    }
  }),
  ({ $active }) =>
    $active && {
      '& > div:first-of-type > div': {
        transition: 'none'
      }
    }
)

interface SliderThumbProps {
  $color: ColorToken
  $size: Size
}

export const SliderThumb = styled.div<SliderThumbProps>(({ theme, $size, $color }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: theme.fn.getSize($size, defaultThumbSizes),
  height: theme.fn.getSize($size, defaultThumbSizes),
  borderRadius: theme.radius.xl,
  transition: theme.fn.getTransition(['background', 'border', 'outline']),
  outline: '0.2rem solid transparent',
  background: theme.palette.surface.onVariant,
  '&:hover': {
    background: theme.fn.getMixedColor('primary.variant', $color, 'hover')
  },
  '&:focus-visible': {
    background: theme.fn.getMixedColor('primary.variant', $color, 'focus')
  },
  '&:active': {
    background: theme.fn.getMixedColor('primary.variant', $color, 'active')
  },
  '&[disabled]': {
    background: `${theme.fn.getMixedColor(
      'surface.onVariant',
      'surface.variant',
      'disabled'
    )} !important`
  }
}))
