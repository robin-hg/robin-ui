import { range } from './range'

describe('range', () => {
	it('should return an array of numbers between 0 and 10 inclusive', () => {
		expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})

	it('should return an array of numbers between -5 and 5 inclusive', () => {
		expect(range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
	})

	it('should reverse order if start is greater than end', () => {
		expect(range(5, -5)).toEqual([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5])
	})
})
