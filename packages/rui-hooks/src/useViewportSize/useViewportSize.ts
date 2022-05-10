import { useState, startTransition } from 'react'
import { useEventListener } from '../useEventListener'

export const useViewportSize = () => {
	const [size, setSize] = useState({
		width: document?.documentElement.clientWidth || 0,
		height: document?.documentElement.clientHeight || 0
	})

	const updateSize = () =>
		startTransition(() =>
			setSize({
				width: document?.documentElement.clientWidth || 0,
				height: document?.documentElement.clientHeight || 0
			})
		)

	useEventListener('resize', updateSize)
	useEventListener('orientationchange', updateSize)

	return size
}
