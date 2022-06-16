import { useState } from 'react'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useMediaQuery = (query: string) => {
	const mediaQuery = matchMedia(query)
	const [matches, setMatches] = useState(!!mediaQuery.matches)

	useIsomorphicLayoutEffect(() => {
		setMatches(mediaQuery.matches)
		const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

		mediaQuery.addEventListener('change', listener)
		return () => {
			mediaQuery.removeEventListener('change', listener)
		}
	}, [query])

	return matches
}
