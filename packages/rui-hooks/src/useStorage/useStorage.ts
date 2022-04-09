import { runIfFn } from '@rui/utils'
import { useState } from 'react'
import { useEventListener } from '../useEventListener'
import { useMutableCallback } from '../useMutableCallback'

declare global {
	interface WindowEventMap {
		'local-storage': CustomEvent
		'session-storage': CustomEvent
	}
}

export const useStorage = <T>(
	storageType: 'local' | 'session',
	key: string,
	initialValue?: T
): [T | undefined, (value: T | ((current?: T) => T)) => void] => {
	const storage = storageType === 'session' ? sessionStorage : localStorage

	const getValue = useMutableCallback(() => {
		const item = storage.getItem(key)
		return item ? (JSON.parse(item) as T) : undefined
	})

	const [storedValue, setStoredValue] = useState(getValue() || initialValue)

	const setValue = useMutableCallback((value: T | ((current?: T) => T)) => {
		if (value === undefined) {
			storage.removeItem(key)
			setStoredValue(undefined)
			return
		}
		const newValue = runIfFn(value, storedValue)
		storage.setItem(key, JSON.stringify(newValue))
		dispatchEvent(new Event(storageType === 'session' ? 'session-storage' : 'local-storage'))
		setStoredValue(newValue)
	})

	useEventListener('storage', () => setStoredValue(getValue()))

	return [storedValue, setValue]
}
