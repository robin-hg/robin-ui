import { useCallback } from 'react'

export const useCombinedRef = <T>(...refs: React.Ref<T>[]): React.RefCallback<T> => {
	return useCallback(
		(value: T | null) =>
			refs.forEach(ref => {
				if (!ref) {
					return
				}

				if (ref instanceof Function) {
					return ref(value)
				}

				const mutableRef = ref as React.MutableRefObject<T | null>
				mutableRef.current = value
			}),
		refs
	)
}
