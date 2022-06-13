import { describe, it, expect } from 'vitest'
import { range } from './range'

describe('range', () => {
	it('should return an array of numbers between 0 and 10 inclusive', () => {
		const result = range(0, 10)
		expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})

	it('should return an array of numbers between -5 and 5 inclusive', () => {
		const result = range(-5, 5)
		expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
	})

	it('should reverse order if start is greater than end', () => {
		const result = range(5, -5)
		expect(result).toEqual([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5])
	})
})
