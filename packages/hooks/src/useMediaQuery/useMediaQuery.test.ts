import { renderHook } from '@robin-ui/test-utils'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
  it('should return true if media query matches', () => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(max-width: 600px)',
      addEventListener: () => {},
      removeEventListener: () => {}
    }))
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'))
    expect(result.current).toBe(true)
  })
})
