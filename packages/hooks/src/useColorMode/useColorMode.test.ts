import { act, renderHook } from '@robin-ui/test-utils'
import { useColorMode } from './useColorMode'

describe('useColorMode', () => {
  it('should return the current color mode', () => {
    const { result } = renderHook(() => useColorMode())
    expect(result.current[0]).toBe('light')
  })

  it('should return a function to set the color mode', () => {
    const { result } = renderHook(() => useColorMode())
    const [, setMode] = result.current
    expect(result.current[0]).toBe('light')
    act(() => {
      setMode('dark')
    })
    expect(result.current[0]).toBe('dark')
  })
})
