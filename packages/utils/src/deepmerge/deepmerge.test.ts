import { deepmerge } from './deepmerge'

describe('deepmerge', () => {
  it('should merge objects', () => {
    const obj1 = {
      a: 1,
      b: 2,
      c: 3
    }
    const obj2 = {
      d: 4,
      e: 5,
      f: 6
    }
    expect(deepmerge(obj1, obj2)).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6
    })
  })

  it('should overwrite overlapping keys', () => {
    const obj1 = {
      a: 1,
      b: 2,
      c: []
    }
    const obj2 = {
      b: 4,
      c: 5,
      d: 6
    }
    expect(deepmerge(obj1, obj2)).toEqual({
      a: 1,
      b: 4,
      c: 5,
      d: 6
    })
  })

  it('should concatenate arrays', () => {
    const obj1 = {
      a: 1,
      b: 2,
      c: [1, 2, 3]
    }
    const obj2 = {
      b: 4,
      c: [5, 6],
      d: 6
    }
    expect(deepmerge(obj1, obj2)).toEqual({
      a: 1,
      b: 4,
      c: [1, 2, 3, 5, 6],
      d: 6
    })
  })

  it('should deeply merge objects', () => {
    const obj1 = {
      a: 1,
      b: {
        q: 0,
        w: [1],
        t: {
          y: 7
        }
      }
    }
    const obj2 = {
      b: {
        w: [2],
        e: {
          r: 5
        },
        t: {
          u: 8
        }
      }
    }
    expect(deepmerge(obj1, obj2)).toEqual({
      a: 1,
      b: {
        q: 0,
        w: [1, 2],
        e: {
          r: 5
        },
        t: {
          y: 7,
          u: 8
        }
      }
    })
  })
})
