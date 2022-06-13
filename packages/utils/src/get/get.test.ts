import { describe, it, expect } from 'vitest'
import { get } from './get'

describe('get', () => {
	const obj = {
		a: '',
		b: 1,
		c: {
			d: 2,
			e: {
				f: 3,
				g: [4, 5, 6]
			}
		},
		h: 0,
		i: false
	}
	it('should return item in object', () => {
		expect(get(obj, 'a')).toBe('')
		expect(get(obj, 'c.d')).toBe(2)
		expect(get(obj, ['c', 'd'])).toBe(2)
		expect(get(obj, 'c.e.g.1')).toBe(5)
		expect(get(obj, ['c', 'e', 'g', 1])).toBe(5)
	})

	it('should return undefined if not found', () => {
		expect(get(obj, 'd')).toBe(undefined)
		expect(get(obj, 'c.f')).toBe(undefined)
		expect(get(obj, 'c.e.g.5')).toBe(undefined)
	})

	it('should not return fallback even if value is falsy', () => {
		expect(get(obj, 'a', 'fallback')).toBe('')
		expect(get(obj, 'h', 'fallback')).toBe(0)
		expect(get(obj, 'i', 'fallback')).toBe(false)
	})

	it('should return fallback if undefined', () => {
		expect(get(obj, 'd', 'fallback')).toBe('fallback')
		expect(get(obj, 'c.f', 'fallback')).toBe('fallback')
		expect(get(obj, 'c.e.g.5', 'fallback')).toBe('fallback')
	})

	it('should work with arrays', () => {
		expect(get([0, 1, 2, 3], [2])).toBe(2)
	})
})
