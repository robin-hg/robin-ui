import { act, fireEvent, render, screen } from '@robin-ui/test-utils'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render', () => {
    render(<Checkbox />)
    const element = screen.getByRole('checkbox')

    expect(element).toBeVisible()
    expect(element).not.toBeChecked()
    act(() => {
      // TODO: remove workaround for happy dom not triggering onChange on click when fixed
      fireEvent.change(element, { target: { checked: true } })
    })
    expect(element).toBeChecked()
  })

  it('should render - controlled', () => {
    const { rerender } = render(<Checkbox checked />)
    const element = screen.getByRole('checkbox')

    expect(element).toBeVisible()
    expect(element).toBeChecked()
    rerender(<Checkbox checked={false} />)
    expect(element).not.toBeChecked()
  })
})
