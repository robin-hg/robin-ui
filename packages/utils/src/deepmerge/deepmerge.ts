import { isObject } from '../isObject'

export const deepmerge = <A extends Record<string, unknown>, B extends Record<string, unknown>>(
  target: A,
  source: B,
  options?: { concatArrays?: boolean }
) => {
  const { concatArrays } = options || {}
  const result: Record<string, unknown> = { ...target }
  Object.keys(source).forEach(key => {
    const targetItem = result[key]
    const sourceItem = source[key]
    if (concatArrays && Array.isArray(targetItem) && Array.isArray(sourceItem)) {
      result[key] = [...(targetItem as unknown[]), ...(sourceItem as unknown[])]
    } else if (isObject(targetItem) && isObject(sourceItem)) {
      result[key] = deepmerge(
        targetItem as Record<string, unknown>,
        sourceItem as Record<string, unknown>
      )
    } else {
      result[key] = source[key]
    }
  })
  return result as A & B
}
