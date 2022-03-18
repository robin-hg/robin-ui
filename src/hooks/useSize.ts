import { useEffect, useState } from 'react'
import useEventListener from './useEventListener'

const useSize = (element: Element | null, dependencies: any[] = []) => {
	const [size, setSize] = useState<DOMRect>()

	const getSize = () => {
		const rect = element?.getBoundingClientRect()
		setSize(rect)
	}

	useEffect(getSize, [element, ...dependencies])
	useEventListener('resize', getSize, [element, ...dependencies])

	return size
}

export default useSize
