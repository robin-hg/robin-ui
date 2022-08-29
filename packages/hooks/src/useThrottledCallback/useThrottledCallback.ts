import { useEffect, useRef } from 'react'

import { useEvent } from '../useEvent'

export const useThrottledCallback = <T extends (...args: Parameters<T>) => void>(
  callback: T,
  delay = 500
) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | number>()
  const waitingValue = useRef<Parameters<T>>()

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  return useEvent((...args: Parameters<T>) => {
    if (timeout.current) {
      waitingValue.current = args
      return
    }
    callback(...args)

    const timeoutCallback = () => {
      if (waitingValue.current) {
        // TODO: type inference was broken in ts 4.8. use explicit type for now and investigate later
        const nextArgs: Parameters<T> = waitingValue.current
        callback(...nextArgs)
        waitingValue.current = undefined
        timeout.current = setTimeout(callback, delay)
      } else {
        timeout.current = undefined
      }
    }

    timeout.current = setTimeout(timeoutCallback, delay)
  })
}
