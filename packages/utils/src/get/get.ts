type IGet = {
	<T = unknown>(obj: Record<string, any>, path: string | (number | string)[]): T
	<T>(obj: Record<string, any>, path: string | (number | string)[], defaultValue: T): T
}

export const get: IGet = <T>(
	obj: Record<string, any>,
	path: string | (number | string)[],
	defaultValue?: T
) => {
	const keys = typeof path === 'string' ? path.split('.') : path
	const value = keys.reduce((acc, key) => acc?.[key], obj) as T | undefined
	return value ?? defaultValue
}
