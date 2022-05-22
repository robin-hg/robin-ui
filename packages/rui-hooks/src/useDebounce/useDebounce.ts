import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const timeoutId = window.setTimeout(() => setDebouncedValue(value), delay)
		return () => {
			window.clearTimeout(timeoutId)
		}
	}, [value, delay])

	return debouncedValue
}
