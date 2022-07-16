import { act, renderHook } from '@robin-ui/test-utils'

import { useForceUpdate } from './useForceUpdate'

describe('useForceUpdate', () => {
  it('should rerender on calling the returned function', () => {
    let rendered = 0
    const { result, rerender } = renderHook(() => {
      rendered += 1
      return useForceUpdate()
    })
    expect(rendered).toBe(1)

    // normal rerender
    rerender()
    expect(rendered).toBe(2)

    act(() => {
      result.current()
    })
    expect(rendered).toBe(3)
  })

  it('should immediately trigger a rerender', () => {
    let rendered = 0
    renderHook(() => {
      rendered += 1
      return useForceUpdate(true)
    })
    expect(rendered).toBe(2)
  })
})
