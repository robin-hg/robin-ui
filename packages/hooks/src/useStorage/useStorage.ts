import { useState } from 'react'

import { isBrowser, runIfFn } from '@robin-ui/utils'

import { useEvent } from '../useEvent'
import { useEventListener } from '../useEventListener'

export const useStorage = <T>(
  storageType: 'local' | 'session',
  key: string,
  initialValue?: T
): [T | undefined, (value?: T | ((current?: T) => T)) => void] => {
  const storage = isBrowser() ? (storageType === 'session' ? sessionStorage : localStorage) : null

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
