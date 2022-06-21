import { useCallback, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useForceUpdate = (onMount?: boolean) => {
  const [, setUpdate] = useState({})

  const forceUpdate = useCallback(() => setUpdate({}), [])

  useIsomorphicLayoutEffect(() => {
    if (onMount) {
      forceUpdate()
    }
  }, [])

  return forceUpdate
}
