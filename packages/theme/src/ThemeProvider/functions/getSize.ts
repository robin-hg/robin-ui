import type { Size, SizeValue } from '../../types'
import { parseSize, get } from '@robin-ui/utils'

export const getSize = (
	size: SizeValue,
	object: Partial<Record<Size, string | number>>,
	fallback?: string | number,
	parse = true
) => {
	const value = get<string | undefined>(object, [size])
	if (value === undefined && fallback !== undefined) {
		return fallback
	}
	return parse ? parseSize(value ?? size) : value
}
