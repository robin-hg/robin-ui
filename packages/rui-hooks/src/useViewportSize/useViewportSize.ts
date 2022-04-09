import { useState } from 'react'
import { useEventListener } from '../useEventListener'
import { useThrottledCallback } from '../useThrottledCallback'

export const useViewportSize = () => {
	const [size, setSize] = useState({
		width: document?.documentElement.clientWidth || 0,
		height: document?.documentElement.clientHeight || 0
	})

	const updateSize = useThrottledCallback(() => {
		setSize({
			width: document?.documentElement.clientWidth || 0,
			height: document?.documentElement.clientHeight || 0
		})
	})

	useEventListener('resize', updateSize)
	useEventListener('orientationchange', updateSize)

	return size
}
