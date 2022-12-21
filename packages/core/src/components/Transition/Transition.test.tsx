import { render, screen } from '@robin-ui/test-utils'

import { Fade } from './Transition'

describe('Transition', () => {
  it('should show/hide', () => {
    const { rerender } = render(<Fade>Content</Fade>)

    expect(screen.queryByText('Content')).not.toBeVisible()

    rerender(<Fade in>Content</Fade>)

    expect(screen.queryByText('Content')).not.toBeVisible()
    setTimeout(() => {
      expect(screen.queryByText('Content')).toBeVisible()

      rerender(<Fade>Content</Fade>)

      expect(screen.queryByText('Content')).toBeVisible()
      setTimeout(() => {
        expect(screen.queryByText('Content')).not.toBeVisible()
      }, 200)
    }, 200)
  })

  it('should mount/unmount', () => {
    const { rerender } = render(<Fade unmountOnExit>Content</Fade>)

    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    rerender(
      <Fade unmountOnExit in>
        Content
      </Fade>
    )

    expect(screen.queryByText('Content')).toBeInTheDocument()
    expect(screen.queryByText('Content')).not.toBeVisible()
    setTimeout(() => {
      expect(screen.queryByText('Content')).toBeVisible()

      rerender(<Fade unmountOnExit>Content</Fade>)

      expect(screen.queryByText('Content')).toBeVisible()
      setTimeout(() => {
        expect(screen.queryByText('Content')).not.toBeInTheDocument()
      }, 200)
    }, 200)
  })
})
