import { renderHook } from '@robin-ui/test-utils'
import { useId } from './useId'

describe('useId', () => {
  it('should generate unique ids', () => {
    const { result: result1 } = renderHook(() => useId())
    const { result: result2 } = renderHook(() => useId())

    expect(result1.current).not.toBe(result2.current)
  })

  it('should return given id', () => {
    const { result } = renderHook(() => useId('fixed-id'))

    expect(result.current).toBe('fixed-id')
  })
})
