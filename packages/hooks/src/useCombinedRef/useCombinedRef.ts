import { useCallback } from 'react'

export const useCombinedRef = <T>(...refs: React.Ref<T>[]): React.RefCallback<T> => {
  return useCallback(
    (value: T | null) =>
      refs.forEach(ref => {
        if (!ref) {
          return
        }

        if (ref instanceof Function) {
          return ref(value)
        }

        const mutableRef: React.MutableRefObject<T | null> = ref
        mutableRef.current = value
      }),
    refs
  )
}
