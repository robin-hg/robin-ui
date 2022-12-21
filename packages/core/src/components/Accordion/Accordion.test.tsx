import { act, render, screen } from '@robin-ui/test-utils'

import { Accordion } from './Accordion'

describe('Accordion', () => {
  it('should expand + collapse', () => {
    render(<Accordion title="Title">Content</Accordion>)
    const title = screen.getByRole('button')

    expect(title).toBeVisible()
    expect(title).toHaveTextContent('Title')
    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    act(() => {
      title.click()
    })

    expect(screen.queryByRole('region')).toBeInTheDocument()
    expect(screen.queryByRole('region')).not.toBeVisible()
    setTimeout(() => {
      expect(screen.queryByRole('Content')).toBeVisible()
    }, 200)
  })

  it('should handle disabled', () => {
    render(
      <Accordion title="Title" disabled>
        Content
      </Accordion>
    )
    const title = screen.getByRole('button')

    expect(title).toBeDisabled()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    act(() => {
      title.click()
    })

    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('should handle open', () => {
    render(
      <Accordion title="Title" open>
        Content
      </Accordion>
    )
    const content = screen.getByRole('region')
    expect(content).toBeInTheDocument()
    expect(content).toHaveTextContent('Content')
  })
})
