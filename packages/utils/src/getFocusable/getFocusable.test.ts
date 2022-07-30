import { getFocusable } from './getFocusable'

describe('getFocusable', () => {
  it('should only get focusable elements', () => {
    const node = document.createElement('div')
    node.innerHTML = `
      <div id="test">
        <input />
        <div>
          <input />
        </div>
        <input aria-hidden="true" />
        <button>Button</button>
        <button disabled>Button</button>
        <a href="/">Link</a>
        <a>Link</a>
      </div>
    `
    const el = node.querySelector('#test') as HTMLElement
    expect(getFocusable(el)).toHaveLength(4)
  })

  it('should return empty array if given null', () => {
    expect(getFocusable(null)).toEqual([])
  })
})
