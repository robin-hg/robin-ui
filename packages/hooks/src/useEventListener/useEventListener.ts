import { isBrowser } from '@robin-ui/utils'

import { useEvent } from '../useEvent'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

type IUseEventListener = {
  <K extends keyof WindowEventMap>(eventName: K, handler: (event: WindowEventMap[K]) => void): void
  <K extends keyof HTMLElementEventMap, T extends HTMLElement>(
    eventName: K,
    handler: (event: HTMLElementEventMap[K]) => void,
    element?: T | null
  ): void
}

export const useEventListener: IUseEventListener = <
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement
>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: T | null
) => {
  const el = element ?? (isBrowser() ? window : null)
  const savedHandler = useEvent(handler)

  useIsomorphicLayoutEffect(() => {
    el?.addEventListener(eventName, savedHandler)
    return () => {
      el?.removeEventListener(eventName, savedHandler)
    }
  }, [])
}
