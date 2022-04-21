import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'
import { useMutableCallback } from '../useMutableCallback'

type IUseEventListener = {
	<K extends keyof WindowEventMap>(eventName: K, listener: (event: WindowEventMap[K]) => void): void
	<K extends keyof HTMLElementEventMap, T extends HTMLElement>(
		eventName: K,
		listener: (event: HTMLElementEventMap[K]) => void,
		element: T
	): void
}

export const useEventListener: IUseEventListener = <
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	T extends HTMLElement
>(
	eventName: KW | KH,
	listener: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
	element?: T | null
) => {
	const el = element || window
	const savedListener = useMutableCallback(listener)

	useIsomorphicLayoutEffect(() => {
		el.addEventListener(eventName, savedListener, { capture: true })
		return () => {
			el.removeEventListener(eventName, savedListener, { capture: true })
		}
	}, [])
}
