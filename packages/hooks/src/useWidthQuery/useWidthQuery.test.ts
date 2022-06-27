import { renderHook } from '@robin-ui/test-utils'
import { useWidthQuery } from './useWidthQuery'

const re = /(\d+)/

describe('useWidthQuery', () => {
  beforeAll(() => {
    vi.spyOn(window, 'matchMedia').mockImplementation(query => {
      const width = re.exec(query)?.[0] || '0'
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

  it('should return true when screen width is below md breakpoint', () => {
    const { result } = renderHook(() => useWidthQuery('md'))
    expect(result.current).toBe(true)
  })

  it('should return true when screen width is above md breakpoint', () => {
    const { result } = renderHook(() => useWidthQuery('md', 'up'))
    expect(result.current).toBe(false)
  })
})
