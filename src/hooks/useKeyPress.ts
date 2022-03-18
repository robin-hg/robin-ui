import useEventListener from './useEventListener'

const useKeyPress = (key: string, handler: (event: KeyboardEvent) => void) => {
	useEventListener('keydown', event => {
		if (event.key === key) {
			handler(event)
		}
	})
}

export default useKeyPress
