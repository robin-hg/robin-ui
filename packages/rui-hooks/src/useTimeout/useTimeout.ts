import { useEffect } from 'react'
import { useEvent } from '../useEvent'

export const useTimeout = (callback: () => void, ms = 500, dependencies: React.DependencyList = []) => {
	const savedCallback = useEvent(callback)

	useEffect(() => {
		const timeoutId = window.setTimeout(savedCallback, ms)
		return () => {
			window.clearTimeout(timeoutId)
		}
	}, dependencies)
}
