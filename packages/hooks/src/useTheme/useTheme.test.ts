import { renderHook } from '@robin-ui/test-utils'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  it('should return a robin-ui theme', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.colorMode).toBe('light')
  })
})
