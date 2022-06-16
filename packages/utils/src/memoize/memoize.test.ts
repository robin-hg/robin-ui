import { memoize } from './memoize'

describe('memoize', () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.runOnlyPendingTimers()
		vi.useRealTimers()
	})

	it('should properly memoize values', () => {
		const mockFn = vi.fn()
		const fn = memoize((v: number) => {
			mockFn()
			return v
		})

		expect(fn(1)).toBe(1)
		expect(mockFn).toBeCalledTimes(1)

		expect(fn(1)).toBe(1)
		expect(mockFn).toBeCalledTimes(1)

		expect(fn(2)).toBe(2)
		expect(mockFn).toBeCalledTimes(2)
	})
})
