import { renderHook } from '@robin-ui/test-utils'

import { useMediaQuery } from './useMediaQuery'

const re = /(\d+)/

describe('useMediaQuery', () => {
  beforeEach(() => {
    vi.spyOn(window, 'matchMedia').mockImplementation(query => {
      const width = re.exec(query)?.[0] ?? '0'
      return {
        matches: parseInt(width) > 500,
        media: query,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        onchange: () => {},
        dispatchEvent: () => false
      }
    })
  })

  afterEach(() => {
    vi.spyOn(window, 'matchMedia').mockRestore()
  })

  it('should return true if media query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(max-width: 600px)'))
    expect(result.current).toBe(true)
  })
})
