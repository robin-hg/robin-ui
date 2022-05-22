import { useEffect } from 'react'
import { useEvent } from '../useEvent'

export const useInterval = (callback: () => void, ms = 500) => {
	const savedCallback = useEvent(callback)

	useEffect(() => {
		const intervalId = setInterval(savedCallback, ms)
		return () => {
			clearInterval(intervalId)
		}
	}, [ms, savedCallback])
}
