import { useRef } from 'react'

import { useEvent } from '../useEvent'

export const useDebouncedCallback = <T extends (...args: Parameters<T>) => void>(
  callback: T,
  delay = 500
) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  return useEvent((...args: Parameters<T>) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(() => {
      callback(...args)
    }, delay)
  })
}
