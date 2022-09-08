import { isServer } from '@robin-ui/utils'
import { useState } from 'react'

import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useMediaQuery = (query: string) => {
  const mediaQuery = !isServer ? matchMedia(query) : null
  const [matches, setMatches] = useState(!!mediaQuery?.matches)

  useIsomorphicLayoutEffect(() => {
    if (!mediaQuery) {
      return
    }
    setMatches(mediaQuery.matches)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

    mediaQuery.addEventListener('change', listener)
    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}
