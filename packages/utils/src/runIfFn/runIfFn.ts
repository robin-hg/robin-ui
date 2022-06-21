export const runIfFn = <T, A>(v: T | ((...vArgs: A[]) => T), ...args: A[]): T => {
  return v instanceof Function ? v(...args) : v
}
