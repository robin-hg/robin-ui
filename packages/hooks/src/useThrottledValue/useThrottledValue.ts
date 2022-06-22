import { useEffect, useRef, useState } from 'react'

export const useThrottledValue = <T>(value: T, delay = 500) => {
  const [throttledValue, setThrottledValue] = useState(value)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const waitingValue = useRef<T>()

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  useEffect(() => {
    if (timeout.current) {
      waitingValue.current = value
      return
    }
    setThrottledValue(value)

    const timeoutCallback = () => {
      if (waitingValue.current) {
        setThrottledValue(waitingValue.current)
        waitingValue.current = undefined
        timeout.current = setTimeout(timeoutCallback, delay)
      } else {
        timeout.current = undefined
      }
    }

    timeout.current = setTimeout(timeoutCallback, delay)
  }, [value, delay])

  return throttledValue
}
