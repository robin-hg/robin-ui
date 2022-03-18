import React, { useCallback } from 'react'

const useCombinedRef = <T>(...refs: Array<React.Ref<T> | null | undefined>): React.Ref<T> => {
	const result = useCallback(
		(element: T) =>
			refs.forEach(ref => {
				if (!ref) {
					return
				}
				if (typeof ref === 'function') {
					return ref(element)
				}

				const mutableRef = ref as React.MutableRefObject<T>
				mutableRef.current = element
			}),
		refs
	)

	return result
}

export default useCombinedRef
