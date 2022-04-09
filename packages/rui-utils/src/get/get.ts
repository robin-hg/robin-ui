type IGet = {
	(obj: any, path: string | (number | string)[]): unknown
	<T>(obj: any, path: string | (number | string)[], defaultValue: T): T
}

export const get: IGet = <T>(obj: any, path: string | (number | string)[], defaultValue?: T) => {
	const keys = typeof path === 'string' ? path.split('.') : path
	const value: T = keys.reduce((acc, key) => acc?.[key], obj)
	return value || defaultValue
}
