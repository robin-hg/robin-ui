import { useEventListener } from '../useEventListener'

type Item = HTMLElement | null | undefined

export const useClickOutside = (exclude: Item | Item[], action: (event: MouseEvent) => void) => {
  const excludedArray = Array.isArray(exclude) ? exclude : [exclude]

  useEventListener('click', event => {
    const clickTarget = event.target
    if (!(clickTarget instanceof HTMLElement)) {
      return
    }

    const clickedExcluded = excludedArray.some(target => !!target?.contains(clickTarget))
    if (!clickedExcluded) {
      action(event)
    }
  })
}
