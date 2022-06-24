import { act, renderHook } from '@robin-ui/test-utils'
import { useStorage } from './useStorage'

describe('useStorage', () => {
  beforeEach(() => {
    const store = new Map<string, string>()
    vi.spyOn(sessionStorage, 'getItem').mockImplementation(key => store.get(key) || '')
    vi.spyOn(sessionStorage, 'removeItem').mockImplementation(key => store.delete(key))
    vi.spyOn(sessionStorage, 'setItem').mockImplementation((key, item) => store.set(key, item))
  })

  afterEach(() => {
    vi.spyOn(sessionStorage, 'getItem').mockRestore()
    vi.spyOn(sessionStorage, 'removeItem').mockRestore()
    vi.spyOn(sessionStorage, 'setItem').mockRestore()
  })

  it('should save initial value in storage', () => {
    const { result } = renderHook(() => useStorage('session', 'key', 1))
    expect(result.current[0]).toBe(1)
  })

  it('should update value in storage', () => {
    const { result } = renderHook(() => useStorage('session', 'key', 1))
    const [, setValue] = result.current
    expect(result.current[0]).toBe(1)

    act(() => {
      setValue(2)
    })
    expect(result.current[0]).toBe(2)

    act(() => {
      setValue(3)
    })
    expect(result.current[0]).toBe(3)
  })

  it('should delete value from storage', () => {
    const { result } = renderHook(() => useStorage('session', 'key', 1))
    const [, setValue] = result.current
    expect(result.current[0]).toBe(1)

    act(() => {
      setValue()
    })
    expect(result.current[0]).toBe(undefined)
  })

  it('should update value using a function', () => {
    const { result } = renderHook(() => useStorage('session', 'key', 1))
    const [, setValue] = result.current
    expect(result.current[0]).toBe(1)

    act(() => {
      setValue((currentValue = 0) => currentValue + 1)
    })
    expect(result.current[0]).toBe(2)
  })

  it('should handle objects', () => {
    const { result } = renderHook(() =>
      useStorage<Record<string, number>>('session', 'key', { a: 1 })
    )
    const [, setValue] = result.current
    expect(result.current[0]).toEqual({ a: 1 })

    act(() => {
      setValue({ a: 1, b: 3 })
    })
    expect(result.current[0]).toEqual({ a: 1, b: 3 })

    act(() => {
      setValue()
    })
    expect(result.current[0]).toBe(undefined)
  })
})
