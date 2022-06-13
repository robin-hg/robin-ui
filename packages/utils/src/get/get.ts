import { isObject } from '../isObject'

type IGet = {
	<T = unknown>(
		obj: Record<PropertyKey, unknown> | unknown[],
		path: string | (number | string)[]
	): T
	<T>(
		obj: Record<PropertyKey, unknown> | unknown[],
		path: string | (number | string)[],
		defaultValue: T
	): T
}

export const get: IGet = <T>(
	obj: Record<PropertyKey, unknown> | unknown[],
	path: string | (number | string)[],
	defaultValue?: T
) => {
	const keys = typeof path === 'string' ? path.split('.') : path
	const value = keys.reduce<T | unknown | Record<PropertyKey, unknown>>((acc, key) => {
		if (isObject(acc)) {
			return (acc as Record<PropertyKey, unknown>)?.[key]
		}
		if (Array.isArray(acc)) {
			return acc?.[typeof key === 'number' ? key : parseInt(key)]
		}
		return undefined
	}, obj)
	return value ?? defaultValue
}
