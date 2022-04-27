import { useCallback, useRef } from 'react'

export const useMutableCallback = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T) => {
	const ref = useRef<T>(callback)
	ref.current = callback

	return useCallback(ref.current, [])
}
