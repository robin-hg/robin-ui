import { renderHook } from '@robin-ui/test-utils'
import { usePreviousState } from './usePreviousState'

describe('usePreviousState', () => {
  it('should return the previous state', () => {
    const { result, rerender } = renderHook(({ state }) => usePreviousState(state), {
      initialProps: { state: 1 }
    })

    expect(result.current).toBe(undefined)
    rerender({ state: 2 })
    expect(result.current).toBe(1)
    rerender({ state: 3 })
    expect(result.current).toBe(2)
  })
})
