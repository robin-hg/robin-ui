import { describe, it, expect } from 'vitest'
import { isObject } from './isObject'

describe('isObject', () => {
	it('should return true if given an object', () => {
		expect(isObject({})).toEqual(true)
		expect(isObject({ a: 1 })).toEqual(true)
	})

	it('should return false if not given an object', () => {
		expect(isObject(1)).toEqual(false)
		expect(isObject('1')).toEqual(false)
		expect(isObject([1, 2, 3])).toEqual(false)
		expect(isObject(true)).toEqual(false)
		expect(isObject(() => {})).toEqual(false)
		expect(isObject(null)).toEqual(false)
		expect(isObject(undefined)).toEqual(false)
	})
})
