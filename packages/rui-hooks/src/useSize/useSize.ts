import { useState } from 'react'
import { useEventListener } from '../useEventListener'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useSize = (elementRef: React.RefObject<HTMLElement>, dependencies: React.DependencyList = []) => {
	const [size, setSize] = useState<DOMRect>()

	const getSize = () => {
		const rect = elementRef.current?.getBoundingClientRect()
		setSize(rect)
	}

	useIsomorphicLayoutEffect(getSize, [elementRef.current, ...dependencies])
	useEventListener('resize', getSize)

	return size
}
