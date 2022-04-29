import { useCallback, useState } from 'react'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useForceUpdate = (onMount?: boolean) => {
	const [, update] = useState({})

	const forceUpdate = useCallback(() => update({}), [])

	useIsomorphicLayoutEffect(() => {
		if (onMount) {
			forceUpdate()
		}
	}, [])

	return forceUpdate
}
