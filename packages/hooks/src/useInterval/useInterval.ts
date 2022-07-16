import { useEffect, useRef } from 'react'

import { useEvent } from '../useEvent'

export const useInterval = (callback: () => void, ms = 500) => {
  const savedCallback = useEvent(callback)
  const interval = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    interval.current = setInterval(savedCallback, ms)
    return () => {
      clearInterval(interval.current)
    }
  }, [ms, savedCallback])

  return interval.current
}
