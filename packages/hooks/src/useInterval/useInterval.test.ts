import { renderHook } from '@robin-ui/test-utils'

import { useInterval } from './useInterval'

describe('useInterval', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should call the given function at each interval', () => {
    const fn = vi.fn()
    renderHook(() => useInterval(fn, 1000))

    expect(fn).toHaveBeenCalledTimes(0)
    vi.advanceTimersByTime(500)
    expect(fn).toHaveBeenCalledTimes(0)
    vi.advanceTimersByTime(500)
    expect(fn).toHaveBeenCalledTimes(1)

    for (let i = 0; i < 5; i++) {
      vi.advanceTimersByTime(1000)
      expect(fn).toHaveBeenCalledTimes(i + 2)
    }
  })
})
