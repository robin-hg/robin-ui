import type { Size } from '@robin-ui/types'
import { parseSize } from '@robin-ui/utils'
import { useTheme } from '../useTheme'
import { useMediaQuery } from '../useMediaQuery'

export const useWidthQuery = (breakpoint: Size | number, direction: 'up' | 'down' = 'down') => {
	const theme = useTheme()
	const breakpointValue =
		typeof breakpoint === 'number' ? breakpoint : theme.breakpoints[breakpoint]
	const result = useMediaQuery(`(max-width: ${parseSize(breakpointValue)})`)

	return direction === 'down' ? result : !result
}
