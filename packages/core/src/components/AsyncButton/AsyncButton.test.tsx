import { act, render, screen, waitFor } from '@robin-ui/test-utils'

import { AsyncButton } from './AsyncButton'

describe('AsyncButton', () => {
  it('should render', () => {
    render(<AsyncButton>Content</AsyncButton>)
    const element = screen.getByRole('button')

    expect(element).toBeVisible()
    expect(element).toHaveTextContent('Content')
  })

  it('should handle click', async () => {
    const fn = vi.fn()
    const completeFn = vi.fn()
    render(
      <AsyncButton onClick={fn} onComplete={completeFn}>
        Content
      </AsyncButton>
    )
    const element = screen.getByRole('button')

    expect(fn).not.toHaveBeenCalled()
    act(() => {
      element.click()
    })
    expect(fn).toHaveBeenCalled()
    expect(element).toHaveTextContent('Loading')
    expect(completeFn).not.toHaveBeenCalled()
    await waitFor(() => expect(element).toHaveTextContent('Complete'))
    expect(completeFn).toHaveBeenCalled()
    await waitFor(() => expect(element).toHaveTextContent('Content'))
  })

  it('should handle error', async () => {
    const fn = vi.fn().mockImplementation(() => {
      throw Error('error')
    })
    const completeFn = vi.fn()
    const errorFn = vi.fn()
    render(
      <AsyncButton onClick={fn} onComplete={completeFn} onError={errorFn}>
        Content
      </AsyncButton>
    )
    const element = screen.getByRole('button')

    expect(fn).not.toHaveBeenCalled()
    act(() => {
      element.click()
    })
    expect(fn).toHaveBeenCalled()
    expect(element).toHaveTextContent('Loading')
    expect(errorFn).not.toHaveBeenCalled()
    await waitFor(() => expect(element).toHaveTextContent('Error'))
    expect(errorFn).toHaveBeenCalled()
    await waitFor(() => expect(element).toHaveTextContent('Content'))
    expect(completeFn).not.toHaveBeenCalled()
  })
})
