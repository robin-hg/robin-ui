import { useMediaQuery } from '../useMediaQuery'

export const useReducedMotion = () => {
	return useMediaQuery('(prefers-reduced-motion: reduce)')
}
