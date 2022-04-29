export const pick = <O extends Record<string, unknown>, K extends keyof O>(obj: O, keys: K[]) => {
	return Object.fromEntries(keys.map(key => [key, obj[key]])) as Pick<O, K>
}
