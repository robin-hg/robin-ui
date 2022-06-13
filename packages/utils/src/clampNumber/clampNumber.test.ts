import { describe, it, expect } from 'vitest'
import { clampNumber } from './clampNumber'

describe('clampNumber', () => {
	it('should return correct min', () => {
		expect(clampNumber(10, 0)).toBe(10)
		expect(clampNumber(0, 0)).toBe(0)
		expect(clampNumber(-100, 0)).toBe(0)
	})

	it('should return correct max', () => {
		expect(clampNumber(10, undefined, 0)).toBe(0)
		expect(clampNumber(0, undefined, 0)).toBe(0)
		expect(clampNumber(-100, undefined, 0)).toBe(-100)
	})

	it('should return value between min and max', () => {
		expect(clampNumber(50, 0, 100)).toBe(50)
		expect(clampNumber(0, 0, 100)).toBe(0)
		expect(clampNumber(-50, 0, 100)).toBe(0)
		expect(clampNumber(100, 0, 100)).toBe(100)
		expect(clampNumber(200, 0, 100)).toBe(100)
	})
})
