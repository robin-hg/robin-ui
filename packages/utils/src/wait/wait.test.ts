/* eslint-disable @typescript-eslint/no-floating-promises */
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { wait } from './wait'

describe('wait', () => {
	beforeEach(() => {
		vi.useFakeTimers()
		vi.clearAllMocks()
	})

	it('waits for 1 seconds', async () => {
		const fn = vi.fn()
		const testFn = async () => {
			await wait(1000)
			fn()
		}
		testFn()
		expect(fn).not.toHaveBeenCalled()
		vi.advanceTimersByTime(1000)
		await Promise.resolve()
		expect(fn).toHaveBeenCalledOnce()
	})

	it('waits for 3 seconds', async () => {
		const fn = vi.fn()
		const testFn = async () => {
			await wait(3000)
			fn()
		}
		testFn()
		expect(fn).not.toHaveBeenCalled()
		vi.advanceTimersByTime(2000)
		expect(fn).not.toHaveBeenCalled()
		vi.advanceTimersByTime(1000)
		await Promise.resolve()
		expect(fn).toHaveBeenCalledOnce()
	})
})
