import { useEventListener } from '../useEventListener'

export const useClickOutside = (
	exclude: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
	action: (event: PointerEvent) => void
) => {
	const excludedArray = Array.isArray(exclude) ? exclude : [exclude]
	useEventListener('pointerdown', event => {
		const clickedExcluded = excludedArray.some(target => !!target.current?.contains(event.target as HTMLElement))
		if (!clickedExcluded) {
			action(event)
		}
	})
}
