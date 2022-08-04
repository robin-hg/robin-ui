import { render, screen, userEvent } from '@robin-ui/test-utils'

import { FocusTrap } from './FocusTrap'

describe('FocusTrap', () => {
  it('should trap focus', async () => {
    render(
      <div>
        <FocusTrap>
          <input data-testid="input1" />
          <input data-testid="input2" />
        </FocusTrap>
        <input />
      </div>
    )
    const input1 = screen.getByTestId('input1')
    const input2 = screen.getByTestId('input2')

    input1.focus()
    expect(input1).toHaveFocus()
    await userEvent.tab()
    expect(input2).toHaveFocus()
    await userEvent.tab()
    expect(input1).toHaveFocus()
  })

  it('should not trap focus if disabled', async () => {
    render(
      <div>
        <FocusTrap disabled>
          <input data-testid="input1" />
          <input data-testid="input2" />
        </FocusTrap>
        <input data-testid="input3" />
      </div>
    )
    const input1 = screen.getByTestId('input1')
    const input2 = screen.getByTestId('input2')
    const input3 = screen.getByTestId('input3')

    input1.focus()
    expect(input1).toHaveFocus()
    await userEvent.tab()
    expect(input2).toHaveFocus()
    await userEvent.tab()
    expect(input3).toHaveFocus()
  })

  it('should auto focus on mount', () => {
    render(
      <FocusTrap focusOnMount>
        <input data-testid="input" />
      </FocusTrap>
    )
    expect(screen.getByTestId('input')).toHaveFocus()
  })
})
