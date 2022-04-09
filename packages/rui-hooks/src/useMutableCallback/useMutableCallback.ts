import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useMutableCallback = <T extends (...args: any[]) => any>(callback: T) => {
	const ref = useRef<T>(callback)

	useIsomorphicLayoutEffect(() => {
		ref.current = callback
	}, [callback])

	return ref.current
}
