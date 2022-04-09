const defaultSerializer = (...args: any[]) => JSON.stringify(args)

export const memoize = <T extends (...args: any[]) => any>(fn: T, serializer = defaultSerializer) => {
	const cache = new Map<ReturnType<typeof serializer>, ReturnType<T>>()

	return (...args: Parameters<T>) => {
		const key = serializer(...args)
		const value = cache.get(key)

		if (value) {
			return value
		}

		return fn(...args)
	}
}
