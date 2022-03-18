import { useState } from 'react'
import useTimeoutEffect from './useTimeoutEffect'

const useDebounce = <T>(value: T, ms = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useTimeoutEffect(() => setDebouncedValue(value), ms, [value, ms])

	return debouncedValue
}

export default useDebounce
