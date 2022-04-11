import type { BaseTheme, SizeValue } from '../../types'
import { parseSize } from '@rui/utils'

export const getSpacing = (theme: BaseTheme) => (size: SizeValue | SizeValue[]) => {
	const getSize = (s: SizeValue) => {
		switch (s) {
			case 'xs':
			case 'sm':
			case 'md':
			case 'lg':
			case 'xl':
				return parseSize(theme.spacing[s])
			default:
				return parseSize(s)
		}
	}

	return Array.isArray(size) ? size.map(getSize).join(' ') : getSize(size)
}
