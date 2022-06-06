import { useEffect } from 'react'
import { useEvent } from '../useEvent'

export const useTimeout = (callback: () => void, ms = 500) => {
	const savedCallback = useEvent(callback)

	useEffect(() => {
		const timeout = window.setTimeout(savedCallback, ms)
		return () => {
			window.clearTimeout(timeout)
		}
	}, [ms, savedCallback])
}
