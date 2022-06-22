import { act, renderHook } from '@robin-ui/test-utils'

import { useUncontrolled } from './useUncontrolled'

describe('useUncontrolled', () => {
  it('should create a new state if uncontrolled', () => {
    const { result } = renderHook(({ defaultValue }) => useUncontrolled(defaultValue), {
      initialProps: { defaultValue: 1 }
    })
    const [, setUncontrolled] = result.current
    expect(result.current[0]).toBe(1)

    act(() => {
      setUncontrolled(2)
    })
    expect(result.current[0]).toBe(2)
  })

  it('should use given controlled value instead if given', () => {
    const { result, rerender } = renderHook(
      ({ controlledValue }) => useUncontrolled(1, controlledValue),
      {
        initialProps: { controlledValue: 2 }
      }
    )
    expect(result.current[0]).toBe(2)

    rerender({ controlledValue: 3 })
    expect(result.current[0]).toBe(3)
  })
})
