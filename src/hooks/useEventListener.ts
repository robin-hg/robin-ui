import { useEffect } from 'react'

const useEventListener = <K extends keyof WindowEventMap>(
	eventName: K,
	listener: (event: WindowEventMap[K]) => void,
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
