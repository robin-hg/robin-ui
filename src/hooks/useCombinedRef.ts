import React, { useCallback } from 'react'

const useCombinedRef = <T>(...refs: React.Ref<T>[]): React.Ref<T> => {
	const result = useCallback(
		(value: T | null) =>
			refs.forEach(ref => {
				if (!ref) {
					return
				}

				if (typeof ref === 'function') {
					return ref(value)
				}

				const mutableRef = ref as React.MutableRefObject<T | null>
				mutableRef.current = value
			}),
		refs
	)

	return result
}

export default useCombinedRef
