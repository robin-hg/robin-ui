import type { Size, SizeValue } from '../../types'
import { parseSize, get } from '@rui/utils'

type IGetSize = {
	(size: SizeValue, object: Partial<Record<Size, string | number>>): string
	<T extends boolean>(size: SizeValue, object: Partial<Record<Size, string | number>>, parse: T): T extends true
		? string
		: string | undefined
}

export const getSize: IGetSize = (size: SizeValue, object: Partial<Record<Size, string | number>>, parse = true) => {
	const value = get<string>(object, [size])
	return parse ? parseSize(value ?? size) : value
}
