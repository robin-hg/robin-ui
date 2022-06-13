import { describe, it, expect, vi } from 'vitest'
import { runIfFn } from './runIfFn'

describe('runIfFn', () => {
	it('should run a function', () => {
		const fn = vi.fn()
		runIfFn(fn)
		expect(fn).toHaveBeenCalledOnce()
	})

	it('should return a number', () => {
		const result = runIfFn(1)
		expect(result).toEqual(1)
	})

	it('should return an object', () => {
		const result = runIfFn({ a: 1 })
		expect(result).toEqual({ a: 1 })
	})

	it('should return an array', () => {
		const result = runIfFn([1, 2, 3])
		expect(result).toEqual([1, 2, 3])
	})
})
