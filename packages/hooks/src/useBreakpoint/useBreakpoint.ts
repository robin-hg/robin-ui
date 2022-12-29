import { useTheme } from '../useTheme'
import { useViewportSize } from '../useViewportSize'

export const useBreakpoint = () => {
  const { width } = useViewportSize()
  const theme = useTheme()

  if (width < theme.breakpoints.xs) {
    return 'xs'
  } else if (width < theme.breakpoints.sm) {
    return 'sm'
  } else if (width < theme.breakpoints.md) {
    return 'md'
  } else if (width < theme.breakpoints.lg) {
    return 'lg'
  } else {
    return 'xl'
  }
}
