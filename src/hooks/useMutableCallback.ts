import { useCallback, useEffect, useRef } from 'react'

const useMutableCallback = <T extends (...args: any[]) => any>(callback: T) => {
	const ref = useRef<T>()

	useEffect(() => {
		ref.current = callback
	}, [callback])

	return useCallback((...args) => {
		ref.current?.(...args)
	}, [])
}

export default useMutableCallback
