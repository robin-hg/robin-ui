import { useCallback, useRef } from 'react'

export const useEvent = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T) => {
  const ref = useRef<T>(callback)
  ref.current = callback

  return useCallback((...args: Parameters<T>) => ref.current(...args), [])
}
