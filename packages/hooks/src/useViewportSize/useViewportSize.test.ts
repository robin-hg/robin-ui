import { act, renderHook } from '@robin-ui/test-utils'

import { useViewportSize } from './useViewportSize'

describe('useViewportSize', () => {
  it('should return viewport size', () => {
    const { result } = renderHook(() => useViewportSize())

    act(() => {
      global.innerWidth = 500
      global.innerHeight = 300
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toEqual({ width: 500, height: 300 })

    act(() => {
      global.innerWidth = 1000
      global.innerHeight = 600
      global.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toEqual({ width: 1000, height: 600 })
  })
})
