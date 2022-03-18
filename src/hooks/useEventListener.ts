import { useEffect } from 'react'

const useEventListener = <K extends keyof GlobalEventHandlersEventMap>(
	eventName: K,
	listener: (event: GlobalEventHandlersEventMap[K]) => void,
	dependencies: any[] = []
) => {
	useEffect(() => {
		window.addEventListener(eventName, listener, { capture: true })
		return () => {
			window.removeEventListener(eventName, listener, { capture: true })
		}
	}, dependencies)
}

export default useEventListener
