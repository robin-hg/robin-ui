import { useState } from 'react'
import useEventListener from './useEventListener'

const useOrientation = () => {
	const [orientation, setOrientation] = useState(screen.orientation.type)

	useEventListener('orientationchange', () => setOrientation(screen.orientation.type))

	return orientation
}

export default useOrientation
