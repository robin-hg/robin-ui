import { isObject } from './isObject'

describe('isObject', () => {
	it('should return true if given an object', () => {
		expect(isObject({})).toBe(true)
		expect(isObject({ a: 1 })).toBe(true)
	})

	it('should return false if not given an object', () => {
		expect(isObject(1)).toBe(false)
		expect(isObject('1')).toBe(false)
		expect(isObject([1, 2, 3])).toBe(false)
		expect(isObject(true)).toBe(false)
		expect(isObject(() => {})).toBe(false)
		expect(isObject(null)).toBe(false)
		expect(isObject(undefined)).toBe(false)
	})
})
