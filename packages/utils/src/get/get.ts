import { isObject } from '../isObject'

type IGet = {
  <T = unknown>(obj: Record<string, unknown> | unknown[], path: string | (number | string)[]): T
  <T>(
    obj: Record<string, unknown> | unknown[],
    path: string | (number | string)[],
    defaultValue: T
  ): T
}

export const get: IGet = <T>(
  obj: Record<string, unknown> | unknown[],
  path: string | (number | string)[],
  defaultValue?: T
) => {
  const keys = typeof path === 'string' ? path.split('.') : path
  const value = keys.reduce<T | unknown | Record<string, unknown>>((acc, key) => {
    if (isObject(acc)) {
      return (acc as Record<string, unknown>)?.[key]
    }
    if (Array.isArray(acc)) {
      return acc?.[typeof key === 'number' ? key : parseInt(key)]
    }
    return undefined
  }, obj)
  return value ?? defaultValue
}
