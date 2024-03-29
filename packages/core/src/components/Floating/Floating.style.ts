import type { Placement } from '@floating-ui/react-dom'

import { styled } from '@robin-ui/styles'
import type { ColorToken } from '@robin-ui/types'

import { Paper } from '../Paper'
import { Fade } from '../Transition'

export const FadeContainer = styled(Fade)({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 5,
  width: 0,
  height: 0
})

interface FloatingElementProps {
  $placement: Placement
  $surfaceColor: 'background' | 'base' | 'variant'
  $tint: ColorToken
}

export const Arrow = styled.span<FloatingElementProps>(
  ({ theme, $surfaceColor, $tint }) => ({
    position: 'absolute',
    zIndex: -1,
    border: `0.4rem solid ${theme.fn.getMixedColor(
      $surfaceColor === 'background' ? 'background' : `surface.${$surfaceColor}`,
      $tint,
      'surfaceTint'
    )}`,
    transform: 'rotate(45deg)'
  }),
  ({ $placement }) => {
    switch ($placement) {
      case 'top':
      case 'top-end':
      case 'top-start':
        return {
          bottom: '-0.5rem !important'
        }
      case 'right':
      case 'right-end':
      case 'right-start':
        return {
          left: '-0.5rem !important'
        }
      case 'bottom':
      case 'bottom-end':
      case 'bottom-start':
        return {
          top: '-0.5rem !important'
        }
      case 'left':
      case 'left-end':
      case 'left-start':
        return {
          right: '-0.5rem !important'
        }
    }
  }
)

export const FloatingElement = styled(Paper)({
  maxWidth: 'calc(100vw - 3.2rem)',
  height: 'auto',
  minWidth: 'max-content',
  outline: 'none',
  transition: 'none',
  overflow: 'visible'
})
