import { useEventListener } from '../useEventListener'

export const useKeyDown = (key: string, handler: (event: KeyboardEvent) => void) => {
	useEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === key) {
			handler(event)
		}
	})
}
