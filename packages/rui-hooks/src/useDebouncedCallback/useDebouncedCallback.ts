import { useRef } from 'react'
import { useMutableCallback } from '../useMutableCallback'

export const useDebouncedCallback = <T extends (...args: Parameters<T>) => void>(callback: T, delay = 500) => {
	const timeout = useRef<number>()

	return useMutableCallback((...args: Parameters<T>) => {
		if (timeout.current) {
			window.clearTimeout(timeout.current)
		}

		timeout.current = window.setTimeout(() => {
			callback(...args)
		}, delay)
	})
}
