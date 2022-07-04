import { renderHook } from '@robin-ui/test-utils'
import { useLockWindowScroll } from './useLockWindowScroll'

describe('useLockWindowScroll', () => {
  it('should update the body overflow', () => {
    const { rerender } = renderHook(({ lock }) => useLockWindowScroll(lock), {
      initialProps: { lock: false }
    })

    expect(document.body.style.overflow).toBe('auto')
    rerender({ lock: true })
    expect(document.body.style.overflow).toBe('hidden')
    rerender({ lock: false })
    expect(document.body.style.overflow).toBe('auto')
  })
})
