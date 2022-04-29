import { useId as _useId } from 'react'

export const useId = () => {
	const id = _useId()
	return `rui-${id}`
}
