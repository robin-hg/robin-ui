export const memoize = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) => {
	const cache = new Map<string, ReturnType<T>>()

	return (...args: Parameters<T>) => {
		const key = JSON.stringify(args)
		const value = cache.get(key)

		if (value) {
			return value
		}

		return fn.apply(this, args)
	}
}
