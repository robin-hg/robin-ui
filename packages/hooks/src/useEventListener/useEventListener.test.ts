import { renderHook } from '@robin-ui/test-utils'

import { useEventListener } from './useEventListener'

describe('useEventListener', () => {
  it('should add a global event listener', () => {
    const fn = vi.fn()
    renderHook(() => useEventListener('click', fn))

    global.dispatchEvent(new Event('click'))
    expect(fn).toHaveBeenCalled()
  })

  it('should add an event listener to a node', () => {
    const fn = vi.fn()
    const element = document.createElement('div')
    renderHook(() => useEventListener('click', fn, element))

    global.dispatchEvent(new Event('click'))
    expect(fn).not.toHaveBeenCalled()

    element.click()
    expect(fn).toHaveBeenCalled()
  })
})
