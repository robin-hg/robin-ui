import { omit } from './omit'

describe('omit', () => {
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

  it('should remove the given keys from object', () => {
    expect(omit(obj, ['b', 'd'])).toEqual({
      a: 1,
      c: 3,
      e: {
        f: 7,
        g: 8
      }
    })
  })

  it('should not omit anything if no keys are given', () => {
    expect(omit(obj, [])).toEqual(obj)
  })
})
