import { styled } from '@robin-ui/styles'
import type { SizeValue } from '@robin-ui/theme'

interface ButtonGroupContainerProps {
  $radius: SizeValue
}

export const ButtonGroupContainer = styled.div<ButtonGroupContainerProps>(({ theme, $radius }) => ({
  display: 'inline-flex',
  '& > button': {
    position: 'relative',
    borderRadius: theme.radius.xs,
    '&:first-of-type': {
      borderTopLeftRadius: theme.fn.getSize($radius, theme.radius),
      borderBottomLeftRadius: theme.fn.getSize($radius, theme.radius)
    },
    '&:last-of-type': {
      borderTopRightRadius: theme.fn.getSize($radius, theme.radius),
      borderBottomRightRadius: theme.fn.getSize($radius, theme.radius)
    },
    '&:not(:first-of-type)': {
      marginLeft: '-0.1rem'
    },
    '&:focus-visible': {
      zIndex: 1
    }
  }
}))
