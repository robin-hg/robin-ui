import type { Sizes, SizeValue } from '../../types'
import { parseSize } from '@rui/utils'

export const getSize = (size: SizeValue, object: Partial<Record<Sizes, string | number>>, parse = true) => {
	switch (size) {
		case 'xs':
		case 'sm':
		case 'md':
		case 'lg':
		case 'xl':
			return parse ? parseSize(object[size] || size) : undefined
		default:
			return parse ? parseSize(size) : undefined
	}
}
