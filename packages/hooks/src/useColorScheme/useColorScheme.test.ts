import { renderHook } from '@robin-ui/test-utils'

import { useColorScheme } from './useColorScheme'

describe('useColorScheme', () => {
  it('should return the current color mode', () => {
    // global mock for matchQuery will return false for (prefers-color-scheme: dark)
    const { result } = renderHook(() => useColorScheme())
    expect(result.current).toBe('light')
  })

  it('should return the current color mode - dark', () => {
    const spy = vi.spyOn(window, 'matchMedia').mockImplementation(query => {
      return {
        matches: true,
        media: query,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        onchange: () => {},
        dispatchEvent: () => false
      }
    })

    const { result } = renderHook(() => useColorScheme())
    expect(result.current).toBe('dark')

    spy.mockRestore()
  })
})
