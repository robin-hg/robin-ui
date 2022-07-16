import { renderHook } from '@robin-ui/test-utils'

import { useCombinedRef } from './useCombinedRef'

describe('useCombinedRef', () => {
  it('should combine references', () => {
    const ref1 = { current: null }
    const ref2 = { current: null }
    const { result } = renderHook(() => useCombinedRef<HTMLDivElement>(ref1, ref2))

    const element = document.createElement('div')
    result.current(element)

    expect(ref1.current).toBe(element)
    expect(ref2.current).toBe(element)
    expect(ref1.current).toEqual(ref2.current)
  })

  it('should work with callback refs', () => {
    const ref1 = { current: null }
    let ref2: HTMLDivElement | null = null
    const { result } = renderHook(() => useCombinedRef<HTMLDivElement>(ref1, el => (ref2 = el)))

    const element = document.createElement('div')
    result.current(element)

    expect(ref1.current).toBe(element)
    expect(ref2).toBe(element)
    expect(ref1.current).toEqual(ref2)
  })

  it('should work with any number of refs', () => {
    const refs = new Array(20).fill(null).map(() => ({ current: null }))
    const { result } = renderHook(() => useCombinedRef<HTMLDivElement>(...refs))

    const element = document.createElement('div')
    result.current(element)

    refs.forEach(ref => expect(ref.current).toBe(element))
  })

  it('should handle null', () => {
    const ref1 = { current: null }
    const ref2 = { current: null }
    const { result } = renderHook(() => useCombinedRef<HTMLDivElement>(ref1, ref2))
    result.current(null)
    expect(ref1.current).toBe(null)
    expect(ref2.current).toBe(null)
  })
})
