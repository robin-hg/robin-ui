import useWidth from './useWidth'
import useTheme from './useTheme'

const useBreakpoint = () => {
	const viewportWidth = useWidth()
	const theme = useTheme()

	if (viewportWidth < theme.breakpoints.sm) {
		return 'sm'
	} else if (viewportWidth < theme.breakpoints.md) {
		return 'md'
	} else if (viewportWidth < theme.breakpoints.lg) {
		return 'lg'
	} else {
		return 'xl'
	}
}

export default useBreakpoint
