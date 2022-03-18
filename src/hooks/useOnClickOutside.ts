import useEventListener from './useEventListener'

type ExcludedTarget = Element | null

const useOnClickOutside = (exclude: ExcludedTarget | ExcludedTarget[], action: (event: PointerEvent) => void) => {
	useEventListener(
		'pointerdown',
		event => {
			const excludeArray = Array.isArray(exclude) ? exclude : [exclude]
			const clickedExclude = excludeArray.reduce(
				(acc, target) => acc || !!target?.contains(event.target as Element),
				false
			)
			if (!clickedExclude) {
				action(event)
			}
		},
		Array.isArray(exclude) ? exclude : [exclude]
	)
}

export default useOnClickOutside
