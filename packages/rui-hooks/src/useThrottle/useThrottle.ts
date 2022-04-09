import { useEffect, useRef, useState } from 'react'

export const useThrottle = <T>(value: T, delay = 500) => {
	const [throttledValue, setThrottledValue] = useState(value)
	const timeout = useRef<number>()
	const waitingValue = useRef<T>()

	useEffect(() => {
		if (timeout.current) {
			waitingValue.current = value
			return
		}
		setThrottledValue(value)

		const timeoutCallback = () => {
			if (waitingValue.current) {
				setThrottledValue(waitingValue.current)
				waitingValue.current = undefined
				timeout.current = setTimeout(timeoutCallback, delay)
			} else {
				timeout.current = undefined
			}
		}

		timeout.current = setTimeout(timeoutCallback, delay)
		return () => {
			clearTimeout(timeout.current)
		}
	}, [value, delay])

	return throttledValue
}
