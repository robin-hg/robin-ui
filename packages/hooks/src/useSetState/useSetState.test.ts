import { act, renderHook } from '@robin-ui/test-utils'
import { useSetState } from './useSetState'

describe('useSetState', () => {
  it('should maintain a mutable object as state', () => {
    const { result } = renderHook(({ state }) => useSetState(state), {
      initialProps: { state: { a: 1, b: 2 } }
    })
    const [, setState] = result.current

    expect(result.current[0]).toEqual({ a: 1, b: 2 })
    act(() => {
      setState({ a: 1, b: 3 })
    })
    expect(result.current[0]).toEqual({ a: 1, b: 3 })
    act(() => {
      setState({ a: 4, b: 5 })
    })
    expect(result.current[0]).toEqual({ a: 4, b: 5 })
  })
})
