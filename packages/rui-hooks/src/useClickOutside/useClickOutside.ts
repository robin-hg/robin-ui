import { useEventListener } from '../useEventListener'

type Item = HTMLElement | null | undefined

export const useClickOutside = (exclude: Item | Item[], action: (event: PointerEvent) => void) => {
	const excludedArray = Array.isArray(exclude) ? exclude : [exclude]
	useEventListener('pointerdown', event => {
		const clickedExcluded = excludedArray.some(target => !!target?.contains(event.target as HTMLElement))
		if (!clickedExcluded) {
			action(event)
		}
	})
}
