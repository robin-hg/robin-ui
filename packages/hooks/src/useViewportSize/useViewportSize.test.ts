import { act, renderHook } from '@robin-ui/test-utils'
import { useViewportSize } from './useViewportSize'

describe('useViewportSize', () => {
  beforeEach(() => {
    global.innerWidth = 500
    global.innerHeight = 300
  })

  it('should return current viewport size', () => {
    const { result } = renderHook(() => useViewportSize())
    expect(result.current).toEqual({ width: 500, height: 300 })
  })

  it('should handle resize events', () => {
    const { result } = renderHook(() => useViewportSize())

    act(() => {
      global.innerWidth = 1000
      global.innerHeight = 600
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toEqual({ width: 1000, height: 600 })

    act(() => {
      global.innerWidth = 800
      global.innerHeight = 1600
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toEqual({ width: 800, height: 1600 })
  })
})
