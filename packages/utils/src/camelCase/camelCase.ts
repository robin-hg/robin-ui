export const camelCase = (str: string) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr: string) => chr.toUpperCase())
}
