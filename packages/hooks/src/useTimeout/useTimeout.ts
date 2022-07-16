import { useEffect, useRef } from 'react'

import { useEvent } from '../useEvent'

export const useTimeout = (callback: () => void, ms = 500) => {
  const savedCallback = useEvent(callback)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    timeout.current = setTimeout(savedCallback, ms)
    return () => {
      clearTimeout(timeout.current)
    }
  }, [ms, savedCallback])

  return timeout.current
}
