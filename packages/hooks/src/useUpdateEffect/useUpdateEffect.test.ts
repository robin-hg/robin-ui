import { renderHook } from '@robin-ui/test-utils'
import { useUpdateEffect } from './useUpdateEffect'

describe('useUpdateEffect', () => {
  it('should only run on updates', () => {
    const fn = vi.fn()
    const { rerender } = renderHook(i => useUpdateEffect(fn, [i]), { initialProps: 0 })

    expect(fn).not.toHaveBeenCalled()
    rerender(1)
    expect(fn).toHaveBeenCalledOnce()
  })
})
