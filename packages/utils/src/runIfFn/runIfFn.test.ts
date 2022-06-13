import { describe, it, expect, vi } from 'vitest'
import { runIfFn } from './runIfFn'

describe('runIfFn', () => {
	it('should run a function', () => {
		const fn = vi.fn()
		runIfFn(fn)
		expect(fn).toHaveBeenCalledOnce()
	})

	it('should return value', () => {
		expect(runIfFn(1)).toEqual(1)
		expect(runIfFn({ a: 1 })).toEqual({ a: 1 })
		expect(runIfFn([1, 2, 3])).toEqual([1, 2, 3])
	})
})
