export const memoize = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) => {
	const cache = new Map<string, ReturnType<T>>()

	return function (this: any, ...args: Parameters<T>) {
		const key = JSON.stringify(args)
		const savedValue = cache.get(key)

		if (savedValue !== undefined) {
			return savedValue
		}

		const value = fn.apply(this, args)
		cache.set(key, value)

		return value
	}
}
