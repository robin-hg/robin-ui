import { act, fireEvent, render, screen } from '@robin-ui/test-utils'

import { ClickAwayListener } from './ClickAwayListener'

describe('ClickAwayListener', () => {
  it('should call onClickAway', () => {
    const fn = vi.fn()
    render(
      <div data-testid="outside">
        <ClickAwayListener onClickAway={fn}>
          <div data-testid="inside">Content</div>
        </ClickAwayListener>
      </div>
    )
    const outside = screen.getByTestId('outside')
    const inside = screen.getByTestId('inside')

    expect(fn).not.toHaveBeenCalled()
    expect(inside).toBeVisible()
    expect(inside).toHaveTextContent('Content')
    act(() => {
      fireEvent.click(inside)
    })
    expect(fn).not.toHaveBeenCalled()
    act(() => {
      fireEvent.click(outside)
    })
    expect(fn).toHaveBeenCalled()
  })
})
