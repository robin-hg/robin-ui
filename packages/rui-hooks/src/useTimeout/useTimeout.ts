import { useEffect } from 'react'
import { useMutableCallback } from '../useMutableCallback'

export const useTimeout = (callback: () => void, ms = 500, dependencies: React.DependencyList = []) => {
	const savedCallback = useMutableCallback(callback)

	useEffect(() => {
		const timeoutId = window.setTimeout(savedCallback, ms)
		return () => {
			window.clearTimeout(timeoutId)
		}
	}, dependencies)
}
