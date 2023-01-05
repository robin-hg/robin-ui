import { styled } from '@robin-ui/styles'
import type { ColorToken, SizeValue } from '@robin-ui/types'

import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
  $variant: 'flat' | 'elevated' | 'outlined'
  $surfaceColor: 'background' | 'base' | 'variant'
  $tint: ColorToken
  $elevation: number
  $padding: SizeValue | SizeValue[]
  $radius: SizeValue
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>(
  ({ theme, $padding, $radius, $surfaceColor, $tint }) => ({
    position: 'relative',
    zIndex: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
    background: theme.fn.getMixedColor(
      $surfaceColor === 'background' ? 'background' : `surface.${$surfaceColor}`,
      $tint,
      'surfaceTint'
    ),
    color: theme.fn.getOnColor(`surface.${$surfaceColor}`),
    border: '0.1rem solid transparent',
    borderRadius: theme.fn.getSize($radius, theme.radius),
    transition: theme.fn.getTransition(),
    padding: theme.fn.getSpacing($padding)
  }),
  ({ theme, $variant, $elevation }) =>
    ({
      flat: {},
      elevated: {
        boxShadow: theme.shadow.generateShadow($elevation)
      },
      outlined: {
        borderColor: theme.palette.outline
      }
    }[$variant])
)
