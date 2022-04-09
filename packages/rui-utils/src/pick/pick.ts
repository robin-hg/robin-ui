export const pick = <O extends Record<string, any>, K extends keyof O>(obj: O, keys: K[] = []): Record<K, any> => {
	return keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {}) as Record<K, any>
}
