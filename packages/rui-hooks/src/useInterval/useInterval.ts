import { useEffect } from 'react'
import { useEvent } from '../useEvent'

export const useInterval = (callback: () => void, ms = 500) => {
	const savedCallback = useEvent(callback)

	useEffect(() => {
		const intervalId = window.setInterval(savedCallback, ms)
		return () => {
			window.clearInterval(intervalId)
		}
	}, [ms, savedCallback])
}
