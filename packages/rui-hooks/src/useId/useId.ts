import { useId as _useId } from 'react'

export const useId = (staticId?: string) => {
	const id = _useId()
	return staticId ?? `rui-${id}`
}
