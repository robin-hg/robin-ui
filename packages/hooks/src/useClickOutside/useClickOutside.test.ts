import { act, fireEvent, renderHook } from '@robin-ui/test-utils'
import { useClickOutside } from './useClickOutside'

describe('useClickOutside', () => {
  it('should not fire the function when the user clicks on the element', () => {
    const element = document.createElement('div')
    const fn = vi.fn()
    renderHook(() => useClickOutside(element, fn))

    act(() => {
      fireEvent.click(element)
    })

    expect(fn).not.toHaveBeenCalled()
  })

  it('should fire the function when the user clicks outside the element', () => {
    const element = document.createElement('div')
    const fn = vi.fn()
    renderHook(() => useClickOutside(element, fn))

    act(() => {
      fireEvent.click(document.body)
    })

    expect(fn).toHaveBeenCalled()
  })
})
