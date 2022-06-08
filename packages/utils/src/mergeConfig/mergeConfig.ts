import type { DeepPartial } from '@robin-ui/types'

const isObj = (obj: any) => typeof obj === 'object' && obj !== null

export const mergeConfig = <T extends Record<string, any>>(
	target: T,
	source: DeepPartial<T>
): T => {
	const result: Record<string, any> = { ...target }
	Object.keys(source).forEach(key => {
		const targetItem = result[key]
		const sourceItem = source[key]
		if (Array.isArray(targetItem) && Array.isArray(sourceItem)) {
			result[key] = [...targetItem, ...sourceItem]
		} else if (isObj(targetItem) && isObj(sourceItem)) {
			result[key] = mergeConfig(targetItem, sourceItem)
		} else {
			result[key] = source[key]
		}
	})
	return result as T
}
