import { useCallback, useState } from 'react'

export const useForceUpdate = () => {
	const [, update] = useState({})
	return useCallback(() => update({}), [])
}
