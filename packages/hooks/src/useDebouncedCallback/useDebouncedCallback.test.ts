import { renderHook } from '@robin-ui/test-utils'

import { useDebouncedCallback } from './useDebouncedCallback'

describe('useDebouncedCallback', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should debounce function calls', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useDebouncedCallback(fn, 1000))

    result.current()
    expect(fn).toHaveBeenCalledTimes(0)
    result.current()
    result.current()
    result.current()
    vi.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(1)

    result.current()
    vi.advanceTimersByTime(500)
    result.current()
    vi.advanceTimersByTime(500)
    expect(fn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(500)
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
