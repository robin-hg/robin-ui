export const pick = <O extends Record<PropertyKey, unknown>, K extends keyof O>(
  obj: O,
  keys: K[]
) => {
  return Object.fromEntries(keys.map(key => [key, obj[key]])) as Pick<O, K>
}
