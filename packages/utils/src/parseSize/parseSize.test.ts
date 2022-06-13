import { describe, it, expect } from 'vitest'
import { parseSize } from './parseSize'

describe('parseSize', () => {
	it('should return a string with px', () => {
		const result = parseSize(50)
		expect(result).toEqual('50px')
	})

	it('should return a string with px - zero', () => {
		const result = parseSize(0)
		expect(result).toEqual('0px')
	})

	it('should return the given value as is', () => {
		const result = parseSize('5rem')
		expect(result).toEqual('5rem')
	})
})
