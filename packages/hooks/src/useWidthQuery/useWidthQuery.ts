import type { Size } from '@robin-ui/types'
import { parseSize } from '@robin-ui/utils'

import { useMediaQuery } from '../useMediaQuery'
import { useTheme } from '../useTheme'

export const useWidthQuery = (breakpoint: Size | number, direction: 'up' | 'down' = 'down') => {
  const theme = useTheme()
  const breakpointValue =
    typeof breakpoint === 'number' ? breakpoint : theme.breakpoints[breakpoint]
  const result = useMediaQuery(`(max-width: ${parseSize(breakpointValue)})`)

  return direction === 'down' ? result : !result
}
