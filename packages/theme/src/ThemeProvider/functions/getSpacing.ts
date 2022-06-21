import type { BaseTheme, SizeValue } from '../../types'
import { getSize } from './getSize'

export const getSpacing = (theme: BaseTheme) => (size: SizeValue | SizeValue[]) => {
  if (Array.isArray(size)) {
    return size.map(s => getSize(s, theme.spacing)).join(' ')
  }
  return getSize(size, theme.spacing)
}
