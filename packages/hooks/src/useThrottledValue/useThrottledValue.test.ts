import { act, renderHook } from '@robin-ui/test-utils'

import { useThrottledValue } from './useThrottledValue'

describe('useThrottledValue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should throttle value changes', () => {
    const { result, rerender } = renderHook(({ value }) => useThrottledValue(value, 1000), {
      initialProps: { value: 1 }
    })

    expect(result.current).toBe(1)
    rerender({ value: 2 })
    rerender({ value: 3 })
    rerender({ value: 4 })
    rerender({ value: 5 })
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current).toBe(1)

    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current).toBe(5)

    rerender({ value: 6 })
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBe(6)
  })
})
