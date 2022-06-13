import type { DeepPartial } from '@robin-ui/types'
import { isObject } from '../isObject'

export const mergeConfig = <T extends Record<string, unknown>>(
	target: T,
	source: DeepPartial<T>
): T => {
	const result: Record<string, unknown> = { ...target }
	Object.keys(source).forEach(key => {
		const targetItem = result[key]
		const sourceItem = source[key]
		if (Array.isArray(targetItem) && Array.isArray(sourceItem)) {
			result[key] = [...(targetItem as unknown[]), ...(sourceItem as unknown[])]
		} else if (isObject(targetItem) && isObject(sourceItem)) {
			result[key] = mergeConfig(
				targetItem as Record<string, unknown>,
				sourceItem as Record<string, unknown>
			)
		} else if (targetItem) {
			result[key] = source[key]
		}
	})
	return result as T
}
