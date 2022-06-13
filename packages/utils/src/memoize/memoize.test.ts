import { describe, it, expect, beforeEach, vi } from 'vitest'
import { memoize } from './memoize'

describe('memoize', () => {
	beforeEach(() => {
		vi.useFakeTimers()
		vi.clearAllMocks()
	})

	it('should properly memoize values', () => {
		const mockFn = vi.fn()
		const fn = memoize((v: number) => {
			mockFn()
			return v
		})

		expect(fn(1)).toBe(1)
		expect(mockFn).toBeCalledTimes(1)

		expect(fn(1)).toEqual(1)
		expect(mockFn).toBeCalledTimes(1)

		expect(fn(2)).toEqual(2)
		expect(mockFn).toBeCalledTimes(2)
	})
})
