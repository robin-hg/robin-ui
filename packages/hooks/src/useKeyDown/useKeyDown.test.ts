import { renderHook } from '@robin-ui/test-utils'
import { useKeyDown } from './useKeyDown'

describe('useKeyDown', () => {
  it('should call the handler when the key is pressed', () => {
    const fn = vi.fn()
    renderHook(() => useKeyDown('a', fn))
    expect(fn).not.toHaveBeenCalled()

    global.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    expect(fn).toHaveBeenCalled()
  })
})
