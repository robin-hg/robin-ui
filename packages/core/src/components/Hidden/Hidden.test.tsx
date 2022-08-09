import { render, screen } from '@robin-ui/test-utils'

import { Hidden } from './Hidden'

describe('Hidden', () => {
  beforeAll(() => {
    vi.spyOn(window, 'matchMedia').mockImplementation(query => {
      const width = /(\d+)/.exec(query)?.[0] || '0'
      return {
        matches: parseInt(width) > 500,
        media: query,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        onchange: () => {},
        dispatchEvent: () => false
      }
    })
  })

  it('should hide content when breakpoint is not met', () => {
    render(
      <Hidden breakpoint="sm">
        <div data-testid="content">Content</div>
      </Hidden>
    )
    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
  })

  it('should show content when breakpoint is met', () => {
    render(
      <Hidden breakpoint="xs">
        <div data-testid="content">Content</div>
      </Hidden>
    )
    expect(screen.queryByTestId('content')).toBeInTheDocument()
  })

  it('should now show content when breakpoint is not met - up', () => {
    render(
      <Hidden breakpoint="xs" direction="up">
        <div data-testid="content">Content</div>
      </Hidden>
    )
    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
  })

  it('should show content when breakpoint is met - up', () => {
    render(
      <Hidden breakpoint="sm" direction="up">
        <div data-testid="content">Content</div>
      </Hidden>
    )
    expect(screen.queryByTestId('content')).toBeInTheDocument()
  })
})
