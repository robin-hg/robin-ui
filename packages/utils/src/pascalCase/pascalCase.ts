import { camelCase } from '../camelCase'

export const pascalCase = (str: string) => {
  return camelCase(str).replace(/^\w/, (chr: string) => chr.toUpperCase())
}
