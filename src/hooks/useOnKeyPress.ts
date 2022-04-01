import useEventListener from './useEventListener'

const useOnKeyPress = (key: string, handler: (event: KeyboardEvent) => void) => {
	useEventListener('keydown', event => {
		if (event.key === key) {
			handler(event)
		}
	})
}

export default useOnKeyPress
