import { keyframes, styled } from '@robin-ui/styles'
import type { SizeValue } from '@robin-ui/theme'

const pulse = keyframes`
  from {
    width: 0%;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    width: 150%;
    opacity: 0;
  }
`

interface SkeletonContainerProps {
  $animated: boolean
  $loading: boolean
  $radius: SizeValue
}

export const SkeletonContainer = styled.div<SkeletonContainerProps>(
  ({ theme, $loading, $animated, $radius }) =>
    $loading && {
      position: 'relative',
      overflow: 'hidden',
      color: 'transparent',
      background: theme.palette.surface.base,
      borderRadius: theme.fn.getSize($radius, theme.radius),
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-20%',
        right: '-20%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${theme.fn.getAlphaColor(
          theme.palette.surface.onBase,
          'faded'
        )})`,
        borderRadius: 'inherit',
        animation: $animated ? `${pulse} 1.5s ease-out 0.5s infinite` : 'none'
      },
      '& > *': {
        visibility: 'hidden'
      }
    }
)
