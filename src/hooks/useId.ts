import { useRef } from 'react'

const useId = () => {
	const generateId = () =>
		Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
	const id = useRef(generateId())
	return id.current
}

export default useId
