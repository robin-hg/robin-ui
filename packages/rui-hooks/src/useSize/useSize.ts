import { useState } from 'react'
import { useEventListener } from '../useEventListener'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useSize = (element: HTMLElement | null, dependencies: React.DependencyList = []) => {
	const [size, setSize] = useState<DOMRect>()

	const getSize = () => {
		const rect = element?.getBoundingClientRect()
		setSize(rect)
	}

	useIsomorphicLayoutEffect(getSize, [element, ...dependencies])
	useEventListener('resize', getSize)

	return size
}
