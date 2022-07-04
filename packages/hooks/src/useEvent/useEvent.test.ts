import { renderHook } from '@robin-ui/test-utils'
import { useEvent } from './useEvent'

describe('useEvent', () => {
  it('should return a referenced function', () => {
    const { result, rerender } = renderHook(({ state }) => useEvent(() => state), {
      initialProps: { state: 0 }
    })

    const ref1 = result.current
    expect(result.current()).toBe(0)

    rerender({ state: 1 })
    const ref2 = result.current

    expect(ref1).toBe(ref2)
    expect(result.current()).toBe(1)
  })
})
