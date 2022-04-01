import { useState } from 'react'

const useSetState = <T extends Record<string, any>>(
	initialState: T
): [T, (value: Partial<T> | ((current: T) => Partial<T>)) => void] => {
	const [state, setState] = useState(initialState)

	const updateState = (value: Partial<T> | ((current: T) => Partial<T>)) =>
		setState(current => {
			const partial = typeof value === 'function' ? value(current) : value
			return {
				...current,
				...partial
			}
		})

	return [state, updateState]
}

export default useSetState
