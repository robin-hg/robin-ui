import { act, render, screen } from '@robin-ui/test-utils'

import { Accordion } from './Accordion'

describe('Accordion', () => {
  it('should render', () => {
    render(<Accordion title="Title">Content</Accordion>)
    const title = screen.getByRole('button')
    const content = screen.getByRole('region')

    expect(title).toBeVisible()
    expect(title).toHaveTextContent('Title')
    expect(content).not.toBeVisible()

    act(() => {
      title.click()
    })

    setTimeout(() => {
      expect(content).toBeVisible()
      expect(content).toHaveTextContent('Content')
    }, 200)
  })

  it('should handle disabled', () => {
    render(
      <Accordion title="Title" disabled>
        Content
      </Accordion>
    )
    const title = screen.getByRole('button')
    const content = screen.getByRole('region')

    expect(title).toBeDisabled()
    expect(content).not.toBeVisible()

    act(() => {
      title.click()
    })

    setTimeout(() => {
      expect(content).not.toBeVisible()
    }, 200)
  })

  it('should handle open', () => {
    render(
      <Accordion title="Title" open>
        Content
      </Accordion>
    )
    const content = screen.getByRole('region')
    expect(content).toBeVisible()
    expect(content).toHaveTextContent('Content')
  })
})
