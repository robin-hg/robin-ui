import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(!!window?.matchMedia(query).matches)

	useEffect(() => {
		const mediaQuery = matchMedia(query)
		const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

		mediaQuery.addEventListener('change', listener)
		return () => {
			mediaQuery.removeEventListener('change', listener)
		}
	}, [query])

	return matches
}
