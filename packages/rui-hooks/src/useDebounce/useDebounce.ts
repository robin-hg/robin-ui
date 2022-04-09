import { useState } from 'react'
import { useTimeout } from '../useTimeout'

export const useDebounce = <T>(value: T, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useTimeout(() => setDebouncedValue(value), delay, [value, delay])

	return debouncedValue
}
