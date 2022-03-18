import type { RUITheme } from 'style'
import useWidth from './useWidth'
import useTheme from './useTheme'

const useMedia = (breakpoint: keyof RUITheme['breakpoints'] | number, direction: 'up' | 'down' = 'down') => {
	const viewportWidth = useWidth()
	const theme = useTheme()
	const breakpointValue = typeof breakpoint === 'number' ? breakpoint : theme.breakpoints[breakpoint]

	if (direction === 'up') {
		return viewportWidth >= breakpointValue
	} else {
		return viewportWidth < breakpointValue
	}
}

export default useMedia
