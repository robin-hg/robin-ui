import { usePreviousState } from '../usePreviousState'

export const useTraceUpdate = (props: Record<string, unknown>) => {
	const prev = usePreviousState(props)

	const changedProps = Object.entries(props).reduce<
		Record<string, { prev: unknown; value: unknown }>
	>((acc, [key, value]) => {
		const previousValue = prev?.[key]
		if (previousValue !== undefined && previousValue !== value) {
			acc[key] = { prev: previousValue, value }
		}
		return acc
	}, {})

	if (Object.keys(changedProps).length > 0) {
		console.info('Changed props:', changedProps)
	}

	return changedProps
}
