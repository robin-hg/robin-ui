import { useCallback, useState } from 'react'

const useForceUpdate = () => {
	const [, update] = useState({})
	return useCallback(() => update({}), [])
}

export default useForceUpdate
