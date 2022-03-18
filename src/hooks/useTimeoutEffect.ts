import { useEffect } from 'react'

const useTimeoutEffect = (callback: () => void, ms = 500, dependencies: any[] = []) => {
	useEffect(() => {
		const timeout = window.setTimeout(callback, ms)
		return () => {
			clearTimeout(timeout)
		}
	}, dependencies)
}

export default useTimeoutEffect
