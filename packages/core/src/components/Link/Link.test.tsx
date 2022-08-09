import { act, render, screen } from '@robin-ui/test-utils'

import { Link } from './Link'

describe('Link', () => {
  it('should handle click', () => {
    const fn = vi.fn()
    render(<Link onClick={fn}>Content</Link>)
    const element = screen.getByRole('button')

    expect(fn).not.toHaveBeenCalled()
    act(() => {
      element.click()
    })
    expect(fn).toHaveBeenCalled()
  })

  it('should be a link if given href', () => {
    render(<Link href="#">Content</Link>)
    const element = screen.getByRole('link')

    expect(element).toBeVisible()
    expect(element).toHaveTextContent('Content')
  })
})
