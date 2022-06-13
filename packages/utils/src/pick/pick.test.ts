import { describe, it, expect } from 'vitest'
import { pick } from './pick'

describe('pick', () => {
	const obj = {
		a: 1,
		b: 2,
		c: 3,
		d: [4, 5, 6],
		e: {
			f: 7,
			g: 8
		}
	}

	it('should pick the correct keys from object', () => {
		const result = pick(obj, ['a', 'b', 'd'])
		expect(result).toEqual({ a: 1, b: 2, d: [4, 5, 6] })
	})

	it('should pick nothing if no keys are given', () => {
		const result = pick(obj, [])
		expect(result).toEqual({})
	})
})
