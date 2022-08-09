import { act, render, screen } from '@robin-ui/test-utils'

import { Button } from './Button'

describe('Button', () => {
  it('should handle click', () => {
    const fn = vi.fn()
    render(<Button onClick={fn}>Content</Button>)
    const element = screen.getByRole('button')

    expect(fn).not.toHaveBeenCalled()
    act(() => {
      element.click()
    })
    expect(fn).toHaveBeenCalled()
  })

  it('should be a link if given href', () => {
    render(<Button href="#">Content</Button>)
    const element = screen.getByRole('link')

    expect(element).toBeVisible()
    expect(element).toHaveTextContent('Content')
  })
})
