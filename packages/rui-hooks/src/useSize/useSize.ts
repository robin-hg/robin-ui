import { useState, startTransition } from 'react'
import { useEventListener } from '../useEventListener'
import { useForceUpdate } from '../useForceUpdate'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useSize = (element: HTMLElement | null, dependencies: React.DependencyList = []) => {
	const [size, setSize] = useState<DOMRect>()
	useForceUpdate(true)

	const getSize = () =>
		startTransition(() => {
			const rect = element?.getBoundingClientRect()
			setSize(rect)
		})

	useIsomorphicLayoutEffect(getSize, [element, ...dependencies])
	useEventListener('resize', getSize)

	return size
}
