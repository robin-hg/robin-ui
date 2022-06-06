export const runIfFn = <T, A>(v: T | ((...vArgs: A[]) => T), ...args: A[]): T =>
	v instanceof Function ? v(...args) : v
