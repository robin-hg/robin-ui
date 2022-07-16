import { act, renderHook } from '@robin-ui/test-utils'

import { useBreakpoint } from './useBreakpoint'

describe('useBreakpoint', () => {
  beforeEach(() => {
    global.innerWidth = 800
  })

  it('should return current breakpoint', () => {
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current).toBe('md')
  })

  it('should return handle resize', () => {
    const { result } = renderHook(() => useBreakpoint())
    act(() => {
      global.innerWidth = 1000
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe('lg')

    act(() => {
      global.innerWidth = 500
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe('sm')
  })
})
