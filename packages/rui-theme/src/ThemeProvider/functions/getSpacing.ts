import type { BaseTheme, SizeValue } from '../../types'
import { getSize } from './getSize'

export const getSpacing = (theme: BaseTheme) => (size: SizeValue | SizeValue[]) => {
	return Array.isArray(size) ? size.map(s => getSize(s, theme.spacing)).join(' ') : getSize(size, theme.spacing)
}
