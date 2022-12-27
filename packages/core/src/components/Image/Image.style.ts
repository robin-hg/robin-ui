import type { SizeValue } from '@robin-ui/theme'
import { styled } from '@robin-ui/styles'

import { Fade } from '../Transition'

interface ImageContainerProps {
  $radius: SizeValue
  $width: string | number
  $height: string | number
  $fit: NonNullable<React.CSSProperties['objectFit']>
}

export const ImageContainer = styled.div<ImageContainerProps>(
  ({ theme, $radius, $width, $height, $fit }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    '& > *': {
      gridRowStart: 1,
      gridColumnStart: 1
    },
    '& > img': {
      display: 'block',
      objectFit: $fit,
      width: $width,
      height: $height,
      borderRadius: theme.fn.getSize($radius, theme.radius)
    }
  })
)

export const Placeholder = styled(Fade)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.md,
  background: theme.palette.surface.variant
}))
