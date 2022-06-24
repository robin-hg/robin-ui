import { renderHook } from '@robin-ui/test-utils'
import { useThrottledCallback } from './useThrottledCallback'

describe('useThrottledValue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should throttle function calls', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useThrottledCallback(fn, 1000))

    result.current()
    expect(fn).toHaveBeenCalledTimes(1)
    result.current()
    result.current()
    result.current()
    vi.advanceTimersByTime(500)
    expect(fn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(500)
    expect(fn).toHaveBeenCalledTimes(2)

    result.current()
    vi.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(3)
  })
})
