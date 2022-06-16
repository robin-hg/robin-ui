import { parseSize } from './parseSize'

describe('parseSize', () => {
	it('should return a string with px', () => {
		expect(parseSize(50)).toBe('50px')
	})

	it('should return a string with px - zero', () => {
		expect(parseSize(0)).toBe('0px')
	})

	it('should return the given value as is', () => {
		expect(parseSize('5rem')).toBe('5rem')
		expect(parseSize('')).toBe('')
	})
})
