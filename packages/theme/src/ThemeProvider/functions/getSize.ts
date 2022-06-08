import type { Size, SizeValue } from '../../types'
import { get } from '@robin-ui/utils'

export const getSize = (
	size: SizeValue,
	object: Partial<Record<Size, string | number>>,
	fallback?: string | number
) => {
	const value = get<string | undefined>(object, [size])
	return value ?? fallback ?? (size as string | number)
}
