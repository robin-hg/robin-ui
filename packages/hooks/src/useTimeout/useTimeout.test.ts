import { renderHook } from '@robin-ui/test-utils'
import { useTimeout } from './useTimeout'

describe('useTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('should call fn after 1 second', () => {
    const fn = vi.fn()
    renderHook(() => useTimeout(fn, 1000))

    expect(fn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledOnce()
  })
})
