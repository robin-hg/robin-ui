import { Window } from 'happy-dom'

import { getFocusable } from './getFocusable'

describe('getFocusable', () => {
  it('should only get focusable elements', () => {
    const window = new Window()
    const document = window.document
    document.body.innerHTML = `
      <div id="test">
        <input />
        <div>
          <textarea />
        </div>
        <input aria-hidden="true" />
        <button>Button</button>
        <button disabled>Button</button>
        <a href="/">Link</a>
        <a>Link</a>
      </div>
    `
    const el = document.querySelector('#test') as unknown as HTMLElement
    expect(getFocusable(el)).toHaveLength(4)
  })

  it('should return empty array if given null', () => {
    expect(getFocusable(null)).toEqual([])
  })
})
