import { useState } from 'react'
import useEventListener from './useEventListener'

const useWidth = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEventListener('resize', () => setWidth(window.innerWidth))

	return width
}

export default useWidth
