import { useEffect, useRef } from 'react'

export const useUpdateEffect = (
	callback: React.EffectCallback,
	dependencies: React.DependencyList = []
) => {
	const mounted = useRef(false)

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true
			return
		}
		return callback()
	}, dependencies)
}
