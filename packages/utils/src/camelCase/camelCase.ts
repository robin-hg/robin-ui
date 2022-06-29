export const camelCase = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr: string) => chr.toUpperCase())
}
