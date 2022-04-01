import useEventListener from './useEventListener'

type ExcludedTarget = HTMLElement | null | undefined

const useOnClickOutside = (exclude: ExcludedTarget | ExcludedTarget[], action: (event: PointerEvent) => void) => {
	const excludedArray = Array.isArray(exclude) ? exclude : [exclude]
	useEventListener(
		'pointerdown',
		event => {
			const clickedExcluded = excludedArray.some(target => !!target?.contains(event.target as HTMLElement))
			if (!clickedExcluded) {
				action(event)
			}
		},
		excludedArray
	)
}

export default useOnClickOutside
