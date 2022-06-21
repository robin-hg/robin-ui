import { pick } from './pick'

describe('pick', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: [4, 5, 6],
    e: {
      f: 7,
      g: 8
    }
  }

  it('should pick the correct keys from object', () => {
    expect(pick(obj, ['a', 'b', 'd'])).toEqual({ a: 1, b: 2, d: [4, 5, 6] })
  })

  it('should pick nothing if no keys are given', () => {
    expect(pick(obj, [])).toEqual({})
  })
})
