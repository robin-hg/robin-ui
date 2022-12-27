import { isServer, runIfFn } from '@robin-ui/utils'
import { useState } from 'react'

import { useEventListener } from '../useEventListener'
import { useEvent } from '../useEvent'

export const useStorage = <T>(
  storageType: 'local' | 'session',
  key: string,
  initialValue?: T
): [T | undefined, (value?: T | ((current?: T) => T)) => void] => {
  const storage = isServer ? null : storageType === 'session' ? sessionStorage : localStorage

  const getValue = useEvent(() => {
    const item = storage?.getItem(key)

    if (!item) {
      return undefined
    }

    const value: unknown = JSON.parse(item)
    return value as T
  })

  const [storedValue, setStoredValue] = useState(getValue() ?? initialValue)

  const setValue = useEvent((value?: T | ((current?: T) => T)) => {
    if (value === undefined) {
      storage?.removeItem(key)
      setStoredValue(undefined)
      return
    }
    const newValue = runIfFn(value, storedValue)
    storage?.setItem(key, JSON.stringify(newValue))
    setStoredValue(newValue)
  })

  useEventListener('storage', () => setStoredValue(getValue()))

  return [storedValue, setValue]
}
