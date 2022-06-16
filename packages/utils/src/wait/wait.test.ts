/* eslint-disable @typescript-eslint/no-floating-promises */
import { wait } from './wait'

describe('wait', () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.runOnlyPendingTimers()
		vi.useRealTimers()
	})

	it('waits for 1 second', async () => {
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
