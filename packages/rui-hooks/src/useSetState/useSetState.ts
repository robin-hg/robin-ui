import { useState } from 'react'
import { runIfFn } from '@rui/utils'
import { useMutableCallback } from '../useMutableCallback'

export const useSetState = <T extends Record<string, any>>(
	initialState: T
): [T, (value: Partial<T> | ((current: T) => Partial<T>)) => void] => {
	const [state, setState] = useState(initialState)

	const updateState = useMutableCallback((value: Partial<T> | ((current: T) => Partial<T>)) =>
		setState(current => {
			const partial = runIfFn(value, current)
			return {
				...current,
				...partial
			}
		})
	)

	return [state, updateState]
}
