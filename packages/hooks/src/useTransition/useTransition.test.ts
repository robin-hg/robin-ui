import { renderHook } from '@robin-ui/test-utils'

import { useTransition } from './useTransition'

describe('useTransition', () => {
  it('should return default transition object', () => {
    const { result } = renderHook(() => useTransition())
    expect(result.current).toEqual({
      duration: 0.2,
      ease: 'easeOut'
    })
  })

  it('should override default values', () => {
    const { result } = renderHook(() => useTransition(100, 'easeIn'))
    expect(result.current).toEqual({
      duration: 0.1,
      ease: 'easeIn'
    })
  })

  it('should have no duration if prefers reduced motion', () => {
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

    const { result } = renderHook(() => useTransition(100, 'easeIn'))
    expect(result.current).toEqual({
      duration: 0,
      ease: 'easeIn'
    })

    spy.mockRestore()
  })
})
