import { useEffect, useRef, useState } from 'react'

export const useThrottledValue = <T>(value: T, delay = 500) => {
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
				timeout.current = window.setTimeout(timeoutCallback, delay)
			} else {
				timeout.current = undefined
			}
		}

		timeout.current = window.setTimeout(timeoutCallback, delay)
		return () => {
			window.clearTimeout(timeout.current)
		}
	}, [value, delay])

	return throttledValue
}
