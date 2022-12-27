import type { ColorToken } from '@robin-ui/theme'
import { styled } from '@robin-ui/styles'

import { Paper } from '../Paper'

interface AlertContainerProps {
  $color: ColorToken
  $variant: 'flat' | 'outlined'
}

export const AlertContainer = styled(Paper)<AlertContainerProps>(
  ({ theme, $color, $variant }) =>
    ({
      flat: {
        background: $color !== 'none' ? theme.fn.getAlphaColor($color, 'active') : undefined,
        color: theme.palette.surface.onBase,
        '& > div': {
          color: $color !== 'none' ? theme.fn.getColor($color) : undefined
        }
      },
      outlined: {
        background: 'transparent',
        borderColor: $color !== 'none' ? theme.fn.getColor($color) : undefined,
        '& > div': {
          color: $color !== 'none' ? theme.fn.getColor($color) : undefined
        }
      }
    }[$variant])
)

export const AlertTitle = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.sm,
  alignItems: 'center',
  marginBottom: theme.spacing.sm
}))
