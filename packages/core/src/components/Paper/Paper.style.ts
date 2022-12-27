import type { ColorToken, SizeValue } from '@robin-ui/types'
import { styled } from '@robin-ui/styles'

import { BaseContainer } from '../BaseContainer'

interface PaperContainerProps {
  $variant: 'flat' | 'elevated' | 'outlined'
  $surfaceColor: 'base' | 'variant'
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
    background: theme.fn.getMixedColor(`surface.${$surfaceColor}`, $tint, 'surfaceTint'),
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
