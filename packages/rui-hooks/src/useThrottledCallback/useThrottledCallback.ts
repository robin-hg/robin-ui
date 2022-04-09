import { useEffect, useRef } from 'react'
import { useMutableCallback } from '../useMutableCallback'

export const useThrottledCallback = <T extends (...args: any[]) => void>(callback: T, delay = 500) => {
	const timeout = useRef<number>()
	const waitingValue = useRef<Parameters<T>>()

	useEffect(() => () => clearTimeout(timeout.current))

	return useMutableCallback((...args: Parameters<T>) => {
		if (timeout.current) {
			waitingValue.current = args
			return
		}
		callback(...args)

		const timeoutCallback = () => {
			if (waitingValue.current) {
				callback(...args)
				waitingValue.current = undefined
				timeout.current = setTimeout(callback, delay)
			} else {
				timeout.current = undefined
			}
		}

		timeout.current = setTimeout(timeoutCallback, delay)
	})
}
