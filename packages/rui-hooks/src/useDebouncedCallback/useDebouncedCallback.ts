import { useRef } from 'react'
import { useMutableCallback } from '../useMutableCallback'

export const useDebouncedCallback = <T extends (...args: any[]) => void>(callback: T, delay = 500) => {
	const timeout = useRef<number>()

	return useMutableCallback((...args: Parameters<T>) => {
		if (timeout.current) {
			clearTimeout(timeout.current)
		}

		timeout.current = setTimeout(() => {
			callback(...args)
		}, delay)
	})
}
