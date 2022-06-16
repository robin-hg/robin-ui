import { useEffect } from 'react'
import { useEvent } from '../useEvent'

export const useTimeout = (callback: () => void, ms = 500) => {
	const savedCallback = useEvent(callback)

	useEffect(() => {
		const timeout = setTimeout(savedCallback, ms)
		return () => {
			clearTimeout(timeout)
		}
	}, [ms, savedCallback])
}
