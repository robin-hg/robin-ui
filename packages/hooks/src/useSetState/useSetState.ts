import { useState } from 'react'
import { runIfFn } from '@robin-ui/utils'
import { useEvent } from '../useEvent'

export const useSetState = <T extends Record<string, unknown>>(
	initialState: T
): [T, (value: Partial<T> | ((current: T) => Partial<T>)) => void] => {
	const [state, setState] = useState(initialState)

	const updateState = useEvent((value: Partial<T> | ((current: T) => Partial<T>)) =>
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
