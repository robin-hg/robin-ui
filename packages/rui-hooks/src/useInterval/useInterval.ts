import { useEffect } from 'react'
import { useMutableCallback } from '../useMutableCallback'

export const useInterval = (callback: () => void, ms = 500, dependencies: React.DependencyList = []) => {
	const savedCallback = useMutableCallback(callback)

	useEffect(() => {
		const timeout = setInterval(savedCallback, ms)
		return () => {
			clearInterval(timeout)
		}
	}, dependencies)
}
