import { useRef } from 'react'

const generateId = () =>
	Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, '')

export const useId = () => {
	const id = useRef(generateId())
	return `rui-${id.current}`
}
