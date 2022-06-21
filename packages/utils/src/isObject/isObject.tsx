export const isObject = (obj: unknown) => {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}
